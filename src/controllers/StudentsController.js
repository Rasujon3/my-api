const StudentsModel = require('../models/StudentsModel')

// CRUD

// C = Create
exports.InsertStudent=(req,res)=>{
    let reqBody = req.body;

    StudentsModel.create(reqBody, (err,data)=>{
        if (err){
            res.status(400).json({status:"fail",data:err})
        } else {
            res.status(201).json({status:"success",data:data})
        }
    })
}

// R = Read