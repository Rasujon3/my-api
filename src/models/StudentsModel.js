const mongoose = require('mongoose')

const DataSchema =  mongoose.Schema({
    Name: {type:String, unique:true},
    Roll: {type:Number, required:true,
        min: [6, 'Min 6 & Max 12 , But Supplied Value is ={VALUE}'],
        max: [12, 'Min 6 & Max 12 , But Supplied Value is ={VALUE}']},
    Mobile: {type: String,
        validate: {
            validator: function (value) {
                return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value)
            },
            message:"Invalid Bangladeshi Mobile Number"
        }
    },
    Class: {type:String}
    // Remarks: {type:String, default:"No Remarks"}
}, {versionKey: false})

const StudentsModel = mongoose.model('students', DataSchema);
module.exports = StudentsModel;
