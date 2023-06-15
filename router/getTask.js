const express = require("express");
const router = express.Router();
const getTaskController = require("../controller/getTasksController");

// add task to database
router.route('/').get(getTaskController.GetTask);

module.exports = router;
