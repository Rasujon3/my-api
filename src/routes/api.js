const HelloController = require("../controllers/HelloController");
const StudentsController = require("../controllers/StudentsController");
const TokenIssueController = require("../controllers/TokenIssueController");
const JWTPractice = require('../controllers/JWTPractice');
const TokenVerifyMiddleware = require('../middleware/TokenVerifyMiddleware');

const express = require('express');
const router = express.Router();

// This is my 1st get routing
router.get("/hello-get",HelloController.HelloGet)
router.post("/hello-post",HelloController.HelloPost)

// Mongoose
router.get("/TokenIssue",TokenIssueController.TokenIssue)
router.post("/InsertStudent",TokenVerifyMiddleware,StudentsController.InsertStudent)
router.get("/ReadStudent",TokenVerifyMiddleware,StudentsController.ReadStudent)
router.post("/UpdateStudent/:id",TokenVerifyMiddleware,StudentsController.UpdateStudent)
router.get("/DeleteStudent/:id",TokenVerifyMiddleware,StudentsController.DeleteStudent)

// Create JWT Token
router.get("/CreateToken",JWTPractice.CreateToken)

// Decode JWT Token
router.get("/DecodeToken",JWTPractice.DecodeToken)

module.exports = router;