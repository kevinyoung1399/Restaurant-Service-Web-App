const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

/**
*Those are controllers method declarations.
*/
const customerGetMenu = require('./controllers/customerGetMenu');
const customerPlaceOrder = require('./controllers/customerPlaceOrder');
const customerCallWaiter = require('./controllers/customerCallWaiter');
const customerPayOrder = require('./controllers/customerPayOrder');
const customerTrackOrder = require('./controllers/customerTrackOrder');
const getUnconfirmedOrders = require('./controllers/getUnconfirmedOrders');
const getConfirmedOrders = require('./controllers/getConfirmedOrders');
const getPreparedOrders = require('./controllers/getPreparedOrders');
const getCustomerCalls = require('./controllers/getCustomerCalls');
const waiterConfirmOrder = require('./controllers/waiterConfirmOrder');
const waiterFinishOrder = require('./controllers/waiterFinishOrder');
const waiterAddMenuItem = require('./controllers/waiterAddMenuItem');
const waiterFinishCustomerCall = require('./controllers/waiterFinishCustomerCall');
const waiterGetCustomerCalls = require('./controllers/waiterGetCustomerCalls');
const waiterRemoveMenuItem = require('./controllers/waiterRemoveMenuItem');
const waiterAssignTable = require('./controllers/waiterAssignTable')
const kitchenPrepareOrder = require('./controllers/kitchenPrepareOrder');
const signin = require('./controllers/signin');
const register = require('./controllers/register');
const waiterAssignTable = require('./controllers/waiterAssignTable')

/**
*This is connection method for Heroku database.
*/
// const db = knex({
// 	client: 'pg',
// 	connection: {
// 		connectionString : process.env.DATABASE_URL,
// 		ssl: true
// 	}
// });

/**
*This is connection method for local database.
*/
>>>>>>> final-project:back_end/server.js
const db = knex({
	client: 'pg',
	connection: {
		connectionString : process.env.DATABASE_URL,
		ssl: true
	}
});


const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send('Oaxaca services is a goooooooo!')
});

app.get('/customerGetMenu', (req, res) => {customerGetMenu.handleCustomerGetMenu(req, res, db)})

app.post('/customerPlaceOrder', (req, res) => {customerPlaceOrder.handleCustomerPlaceOrder(req, res, db)})

app.post('/customerPayOrder', (req, res) => {customerPayOrder.handleCustomerPayOrder(req, res, db)})

app.post('/customerTrackOrder', (req, res) => {customerTrackOrder.handleCustomerTrackOrder(req, res, db)})

app.post('/customerCallWaiter', (req, res) => {customerCallWaiter.handleCustomerCallWaiter(req, res, db)})

app.get('/getUnconfirmedOrders', (req, res) => {getUnconfirmedOrders.handlegetUnconfirmedOrders(req, res, db)})

app.get('/getConfirmedOrders', (req, res) => {getConfirmedOrders.handlegetConfirmedOrders(req, res, db)})

app.get('/getPreparedOrders', (req, res) => {getPreparedOrders.handlegetPreparedOrders(req, res, db)})

app.get('/waiterGetCustomerCalls', (req, res) => {waiterGetCustomerCalls.handleWaiterGetCustomerCalls(req, res, db)})

app.get('/waiterAssignTable', (req, res) => {waiterAssignTable.handlewaiterAssignTable(req, res, db)})

app.post('/waiterAddMenuItem', (req, res) => {waiterAddMenuItem.handleWaiterAddMenuItem(req, res, db)})

app.post('/waiterRemoveMenuItem', (req, res) => {waiterRemoveMenuItem.handleWaiterRemoveMenuItem(req, res, db)})

app.post('/waiterConfirmOrder', (req, res) => {waiterConfirmOrder.handleWaiterConfirmOrder(req, res, db)})

app.post('/waiterRemoveCall', (req, res) => {waiterRemoveCall.handleWaiterRemoveCall(req, res, db)})

app.post('/waiterFinishOrder', (req, res) => {waiterFinishOrder.handleWaiterFinishOrder(req, res, db)})

app.post('/waiterFinishCustomerCall', (req, res) => {waiterFinishCustomerCall.handleWaiterFinishCustomerCall(req, res, db)})

app.post('/waiterAssignTable', (req, res) => {waiterAssignTable.handleWaiterAssignTable(req, res, db)})

app.post('/kitchenPrepareOrder', (req, res) => {kitchenPrepareOrder.handleKitchenPrepareOrder(req, res, db)})

app.post('/signin', (req, res) => {signin.handleSignin(req, res, db, bcrypt)})

app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt)})

<<<<<<< HEAD:server.js
app.listen(process.env.PORT || 3000, () => {
	console.log(`app is running on port ${process.env.PORT}`);
});

//HEROKU
// app.listen(process.env.PORT || 3000, () => {
// 	console.log(`app is running on port ${process.env.PORT}`);
// });

//LOCAL
app.listen(3000, () => {
	console.log('app is running on port 3000')
})
