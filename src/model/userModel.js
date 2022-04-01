const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        enum: ['Mr', 'Mrs', 'Miss'],
        trim:true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true, 
        unique: true, 
    },
    email: {
        type: String,
        required: true, 
        unique: true, 
    },
    password: {
        type: String,
        required: true, 
        trim: true,
        minLength: 8, 
        maxLength: 15 
    },
    address: {
        street: { type: String, trim: true },
        city: { type: String, trim: true },
        pincode: { type: String }
    },

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema)


/**
{
    "title":"Mr",
    "name":"Manish Kumar",
    "phone" : "809809890909",
    "email" : "m@gmail.com",
    "password":"manish124",
    "address":  {
    "street" : "Sector 17",
    "city" : "New Delhi",
    "pincode" : "110001"
                }
}

**/
