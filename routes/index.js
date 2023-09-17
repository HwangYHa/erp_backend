const express = require('express');
const { getUsers, registerUser, Login, Logout } = require('../controllers/Users.js');
const { verifyToken } = require('../middleware/VerifyToken.js');
const { refreshToken } = require('../controllers/RefreshToken.js');
const { getClients, registerClient, getClienBytName } = require('../controllers/Clients.js');
const { getWarehouses, registerWarehouse } = require('../controllers/Warehouse.js');
const { getItem, registerItem, getItemByName } = require('../controllers/Items.js');
const { getOrder, registerOrder } = require('../controllers/Order.js');

const userRouter = express.Router();
const clientRouter = express.Router();
const warehouseRouter = express.Router();
const itemRouter = express.Router();
const orderRouter = express.Router();

// 로그인및 인증
userRouter.get('/users', verifyToken, getUsers);
userRouter.post('/users', registerUser);
userRouter.post('/login', Login);
userRouter.get('/token', refreshToken);
userRouter.delete('/logout', Logout);

// 거래처
clientRouter.get('/erp/client-Register', getClients);
clientRouter.post('/erp/clientsRegister', registerClient);
clientRouter.get('/erp/getClinetNm', getClienBytName);

// 창고
warehouseRouter.get('/erp/warehouse-Register', getWarehouses);
warehouseRouter.post('/erp/warehousesRegister', registerWarehouse);

// 품목
itemRouter.get('/erp/item', getItem);
itemRouter.post('/erp/itemsRegister', registerItem);
itemRouter.get('/erp/getProductName', getItemByName);

// 주문서
orderRouter.get('/erp/order', getOrder);
orderRouter.post('/erp/orderRegister', registerOrder);

// 발주서


// 구매


// 판매

module.exports = { userRouter, clientRouter, warehouseRouter, itemRouter, orderRouter };