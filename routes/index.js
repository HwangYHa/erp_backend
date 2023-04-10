const express = require('express');
const { getUsers, registerUser, Login, Logout } = require('../controllers/Users.js');
const { verifyToken } = require('../middleware/VerifyToken.js');
const { refreshToken } = require('../controllers/RefreshToken.js');
const { getClients, registerClient } = require('../controllers/Clients.js');
const { getWarehouses, registerWarehouse } = require('../controllers/Warehouse.js');
const { getItem, registerItem } = require('../controllers/Items.js');

const userRouter = express.Router();
const clientRouter = express.Router();
const warehouseRouter = express.Router();
const itemRouter = express.Router();

// 로그인및 인증
userRouter.get('/users', verifyToken, getUsers);
userRouter.post('/users', registerUser);
userRouter.post('/login', Login);
userRouter.get('/token', refreshToken);
userRouter.delete('/logout', Logout);

// 거래처
clientRouter.get('/erp/client-Register', getClients);
clientRouter.post('/erp/clientsRegister', registerClient);

// 창고
warehouseRouter.get('/erp/warehouse-Register', getWarehouses);
warehouseRouter.post('/erp/warehousesRegister', registerWarehouse);

// 품목
itemRouter.get('/erp/item', getItem);
itemRouter.post('/erp/itemsRegister', registerItem);

module.exports = { userRouter, clientRouter, warehouseRouter, itemRouter };