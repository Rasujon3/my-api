const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    Name: {type:String},
    Roll: {type:Number},
    Class: {type:String},
    Remarks: {type:String},
    Adult:Boolean,
    comments:[],
    details:{},
    dob: Date,
    date: {type: Date, default: Date.now}
})