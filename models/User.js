const mongoose = require("mongoose"),
      Schema = mongoose.Schema,
      bcrypt = require("bcrypt"),
      SALT_WORK_FACTOR = 10,
      MAX_LOGIN_ATTEMPTS = 5,
      LOCK_TIME = 2 * 60 * 60 * 1000;

const UserSchema = new Schema({
    username: { type: String, required: true, index: {unique: true} },
    password: { type: String, required: true },
    email: { type: String, required: true },
    loginAttempts: { type: Number, required: true, default: 0 },
    lockUntil: { type: Number }
});

UserSchema.virtual("isLocked").get(function() {
    return !(this.lockUntil && this.lockUntil > Date.now());
})

UserSchema.pre("save", function(next) {
    const user = this;
    if (!user.isModified("password")) return next();

    // generate salt
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) return next(err);
        // Hash the password
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });

});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) return cb(err);
        cb(null, isMatch);
    });
}

UserSchema.methods.incLoginAttempts = function(cb) {
    if (this.lockUntil && this.lockUntil < Date.now()) {
        return this.update({
            $set: { loginAttempts: 1},
            $unset: { lockUntil: 1 }
        }, cb);
    }

    let updates = { $inc: { loginAttempts: 1 } };

    if (this.loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS && !this.isLocked) {
        updates.$set = { lockUntil: Date.now() + LOCK_TIME }
    }

    return this.update(updates, cb);
}

const reasons = UserSchema.statics.failedLogin = {
    NOT_FOUND: 0,
    PASSWORD_INCORRECT: 1,
    MAX_ATTEMPTS: 2
}

UserSchema.statics.getAuthenticated = function(username, password, cb) {
    this.findOne({username: username}, (err, user) => {
        if (err) return cb(err);

        if (!user) {
            return cb(null, null, reasons.NOT_FOUND)
        }

        if (user.isLocked) {
            return user.incLoginAttempts((err) => {
                if (err) return cb(err);
                return cb(null, null, reasons.MAX_ATTEMPTS);
            })
        }

        user.comparePassword(password, (err, isMatch) => {
            if (err) return cb(err);

            if (isMatch) {
                if (!user.loginAttempts && !user.lockUntil) return cb(null, user);

                const updates = {
                    $set: { loginAttempts: 0 },
                    $unset: { lockUntil: 1}
                };

                return user.update(updates, (err) => {
                    if (err) return cb(err);
                    return cb(null, user);
                })
            }

            user.incLoginAttempts((err) => {
                if (err) return cb(err);
                return cb(null, null, reasons.PASSWORD_INCORRECT);
            });
        });
    });
}




module.exports = mongoose.model("User", UserSchema);