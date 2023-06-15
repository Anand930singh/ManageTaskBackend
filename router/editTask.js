const express = require("express");
const router = express.Router();
const editTaskController = require("../controller/updateTaskController");

// add task to database
router.route('/').put(editTaskController.EditTask);

module.exports = router;
