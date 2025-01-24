import express from "express";

const Router = express.Router();

import {
  createUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import validateUser from "../middlewares/inputValidators.js";

Router.post("/createUser", validateUser, createUser);
Router.get("/getAllUsers", getAllUser);
Router.get("/getUser/:id", getUserById);
Router.put("/updateUser/:id", validateUser, updateUser);
Router.delete("/deleteUser/:id", deleteUser);

export default Router;
