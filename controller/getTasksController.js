const express = require("express");
const Task = require("../models/taskSchema");

const GetTask = async (req, res) => {
  try {
    // Fetch all tasks from the database
    const tasks = await Task.find();

    // Return the tasks as the response
    res.status(200).send({
      msg:"SUCCESS",
      task:tasks
  });
  } catch (error) {
    // Handle any errors that occur during the process
    // console.error("Error fetching tasks:", error);
    res.status(500).json({ error: "Error fetching tasks" });
  }
};

module.exports = { GetTask };
