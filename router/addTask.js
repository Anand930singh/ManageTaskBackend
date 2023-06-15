const express = require("express");
const router = express.Router();
const addTaskController = require("../controller/addTaskController");

// add task to database
router.route('/').post(addTaskController.AddTask);

module.exports = router;
