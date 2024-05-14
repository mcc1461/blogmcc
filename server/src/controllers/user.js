"use strict";

/* -------------------------------------------------------
        NODE EXPRESS | BLOG API
------------------------------------------------------- */

const User = require("../models/user");

module.exports = {
  // List all users
  list: async (req, res) => {
    try {
      // alternative 1:
      // const users = await User.find();
      // alternative 2:
      // Do not forget to put "res" in front of getModelList...
      const users = await res.getModelList(User);
      res.status(200).send({
        error: false,
        data: users,
      });
    } catch (error) {
      res.status(500).send({
        error: true,
        message: "Error fetching users."
      });
    }
  },

  // Create a new user
  create: async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.status(201).send({
        error: false,
        data: newUser,
      });
    } catch (error) {
      res.status(400).send({
        error: true,
        message: "Error creating user."
      });
    }
  },

  // Read a user by ID
  read: async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.params.id });
      if (user) {
        res.status(200).send({
          error: false,
          data: user,
        });
      } else {
        res.status(404).send({
          error: true,
          message: "User not found."
        });
      }
    } catch (error) {
      res.status(500).send({
        error: true,
        message: "Error fetching user."
      });
    }
  },

  // Update a user by ID
  update: async (req, res) => {
    try {
      const updatedUser = await User.updateOne({ _id: req.params.id }, req.body, {
        runValidators: true,
      });
      if (updatedUser.matchedCount === 0) {
        res.status(404).send({
          error: true,
          message: "User not found."
        });
      } else {
        const user = await User.findOne({ _id: req.params.id });
        res.status(202).send({
          error: false,
          data: user,
        });
      }
    } catch (error) {
      res.status(500).send({
        error: true,
        message: "Error updating user."
      });
    }
  },

  // Delete a user by ID
  delete: async (req, res) => {
    try {
      const result = await User.deleteOne({ _id: req.params.id });
      if (result.deletedCount > 0) {
        res.status(204).send();
      } else {
        res.status(404).send({
          error: true,
          message: "User not found."
        });
      }
    } catch (error) {
      res.status(500).send({
        error: true,
        message: "Error deleting user."
      });
    }
  },
};
