import express from "express";
import { getUsers, registerUser, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { getClients, registerClient } from "../controllers/Clients.js";

const userRouter = express.Router();
const clientRouter = express.Router();

userRouter.get('/users', verifyToken, getUsers);
userRouter.post('/users', registerUser);
userRouter.post('/login', Login);
userRouter.get('/token', refreshToken);
userRouter.delete('/logout', Logout);

clientRouter.get('/erp/client-Register', getClients);
clientRouter.post('/erp/clientsRegister', registerClient);

export { userRouter, clientRouter };