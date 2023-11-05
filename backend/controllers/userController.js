import asyncHandler from "express-async-handler";

//Auth user
// POST/api/users/auth
const authenticateUser = asyncHandler(async (request, response) => {
  response.status(200).json({ message: "I am authenticator" });
});

export { authenticateUser };
