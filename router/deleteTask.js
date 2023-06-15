const express = require("express");
const router = express.Router();
const deleteTaskController = require("../controller/deleteTaskController");

// add task to database
router.route('/').delete(deleteTaskController.DeleteTask);

module.exports = router;
