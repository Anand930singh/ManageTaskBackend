const express = require("express");
const mongoose = require("mongoose");
const Task = require("../models/taskSchema");
const { ObjectId } = require("mongodb");

const EditTask = async (req, res) => {
  const { id, status, task } = req.body;

  try {
    await Task.collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { Status: status, Task: task } }
    );
    // console.log("Edited");
    res.status(200).json({ msg: "SUCCESS" });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ err: "FAILED" });
  }
};

module.exports = { EditTask };
