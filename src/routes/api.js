const HelloController = require("../controllers/HelloController");
const StudentsController = require("../controllers/StudentsController");
const JWTPractice = require('../controllers/JWTPractice')

const express = require('express');
const router = express.Router();

// This is my 1st get routing
router.get("/hello-get",HelloController.HelloGet)
router.post("/hello-post",HelloController.HelloPost)

// Mongoose
router.post("/InsertStudent",StudentsController.InsertStudent)
router.get("/ReadStudent",StudentsController.ReadStudent)
router.post("/UpdateStudent/:id",StudentsController.UpdateStudent)
router.get("/DeleteStudent/:id",StudentsController.DeleteStudent)

// Create JWT Token
router.get("/CreateToken",JWTPractice.CreateToken)

// Decode JWT Token
router.get("/DecodeToken",JWTPractice.DecodeToken)

module.exports = router;