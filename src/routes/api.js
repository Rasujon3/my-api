import * as HelloController from "../controllers/HelloController";

const express = require('express');
const router = express.Router();

// This is my 1st get routing
router.get("/hello-get",HelloController.Hello)
router.post("/hello-post",HelloController.Hello)

module.exports = router;