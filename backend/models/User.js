const mongoose = require('mongoose');
const arrayUniquePlugin = require('mongoose-unique-array');

const UserSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    createdAt : {
        type : Date,
        default : Date.now(),
    },
    favorites : {
        type: Array,
        required: false,
        unique: true,
    }
});

UserSchema.plugin(arrayUniquePlugin);

// export model user with UserSchema
module.exports = mongoose.model('user', UserSchema);