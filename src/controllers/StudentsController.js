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
exports.ReadStudent=(req,res)=> {
    let query = {}
    let Projection = "Name Roll Class Remarks"
    StudentsModel.find(query,Projection, function (err,data) {
        if (err){
            res.status(400).json({error:"Invalid request, something went wrong", data:err})
        } else {
            res.status(200).json({success:true,data:data})
        }
    })
}
// U = Update
exports.UpdateStudent = (req,res) => {
    let id = req.params.id;
    let QUERY = {_id: id}
    let reqBody = req.body;
    StudentsModel.updateOne(QUERY,reqBody, (err,data)=> {
        if (err){
            res.status(400).json({error:"Invalid request, something went wrong", data:err})
        } else {
            res.status(200).json({success:true,data:data})
        }
    })
}
// D = Delete
exports.DeleteStudent=(req,res)=> {
    let id = req.params.id;
    let QUERY = {_id: id}
    StudentsModel.remove(QUERY, (err,data)=> {
        if (err){
            res.status(400).json({error:"Invalid request, something went wrong", data:err})
        } else {
            res.status(200).json({success:true,data:data})
        }
    })
}