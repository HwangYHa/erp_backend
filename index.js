const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const {userRouter, clientRouter, warehouseRouter, itemRouter, orderRouter} = require('./routes/index.js');
dotenv.config();
const app = express();

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(userRouter);
app.use(clientRouter);
app.use(warehouseRouter);
app.use(itemRouter);
app.use(orderRouter);
 
 
app.listen(5000, ()=> console.log('Server running at port 5000'));