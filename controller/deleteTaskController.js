const express = require("express");
const Task = require("../models/taskSchema");

const DeleteTask = async (req, res) => {
  const { id } = req.body;

  try {
    const result = await Task.deleteOne({ _id: id });
    if (result.deletedCount > 0) {
      // console.log("Task deleted successfully");
      res.status(200).send({
        msg: "SUCCESS",
      });
    } else {
      // console.log("Task not found");
      res.status(404).send({
        msg: "Task not found",
      });
    }
  } catch (error) {
    // console.log("Error deleting task:", error);
    res.status(500).send({
      msg: "FAIL",
    });
  }
};

module.exports = { DeleteTask };
