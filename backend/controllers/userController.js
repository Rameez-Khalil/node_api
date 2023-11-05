import asyncHandler from "express-async-handler";

//Auth user
// POST/api/users/auth
const authenticateUser = asyncHandler(async (request, response) => {
  response.status(200).json({ message: "I am authenticator" });
});

//Register USER.
const registerUser = asyncHandler(async (request, response) => {
  response.status(201).json({
    message: "Register",
  });
});

//Logout USER.
const logoutUser = asyncHandler(async (request, response) => {
  response.status(200).json({
    message: "logout",
  });
});

//GET Profile
const getUserProfile = asyncHandler(async (request, response) => {
  response.status(200).json({
    message: "GET USER PROFILE",
  });
});

//UPDATE PROFILE:
const updateProfile = asyncHandler(async (request, response) => {
  response.status(201).json({
    message: "UPDATE PROFILE",
  });
});

export {
  authenticateUser,
  registerUser,
  updateProfile,
  logoutUser,
  getUserProfile,
};
