const mongoose = require('mongoose');
const config = require('bcryptjs');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please add a name']
    },
    email:{
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        match:[
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    password:{
        type: String,
        required: [true, 'Please add a password'],
        minlength: 6,
        select: false
    },
    role:{
        type: String,
        enum:['student','instructor','admin'],
        default: 'student'
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

userSchema.pre('save',async function (next) {
    if(!this.isModified('password')){
        next();
    }    

    const salt = await config.genSalt(10);
    this.password = await config.hash(this.password,salt);
});

userSchema.methods.matchPassword = async function(enteredPassword){
    return await config.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);