import {
  getAllUserServices,
  getUserByIdServices,
  createUserServices,
  updateUserServices,
  deleteUserServices,
} from "../models/userModel.js";

//  STANDARD RESPONSE FUNCTION
const handleResponse = (res, status, message, data = null) => {
  return res.status(status).json({
    message,
    data,
  });
};

// CREATE USER

export const createUser = async (req, res, next) => {
  const { email, name } = req.body;
  try {
    const newUser = await createUserServices(name, email);
    handleResponse(res, 201, "User created successfully", newUser);
  } catch (error) {
    next(error);
  }
};

//  Get All User

export const getAllUser = async (req, res, next) => {
  try {
    const users = await getAllUserServices();
    handleResponse(res, 200, "Users fetched successfully", users);
  } catch (error) {
    next(error);
  }
};

//  Get User By Id

export const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await getUserByIdServices(id);
    if (!user) {
      return handleResponse(res, 404, "User not found");
    }
    handleResponse(res, 200, "User fetched successfully", user);
  } catch (error) {
    next(error);
  }
};

//  Update User

export const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const updatedUser = await updateUserServices(id, name, email);
    if (!updatedUser) {
      return handleResponse(res, 404, "User not found");
    }
    handleResponse(res, 200, "User updated successfully", updatedUser);
  } catch (error) {
    next(error);
  }
};

// Delete User

export const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await deleteUserServices(id);
    if (!user) {
      return handleResponse(res, 404, "User not found");
    }
    handleResponse(res, 200, "User deleted successfully", user);
  } catch (error) {
    next(error);
  }
};
