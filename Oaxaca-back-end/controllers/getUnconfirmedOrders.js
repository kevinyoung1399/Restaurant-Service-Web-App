/**
*This is a handle function for getting list of orders that are no yet prepared.
*@constructor
*@param {*} req - request from front end - with table number data.
*@param {*} res - response from back end - table with unconfirmed orders.
*@param {*} db - database - that stores orders table.
*/
const handlegetUnconfirmedOrders = (req, res, db )=> {
	db.select('*').from('orders').where('stage', 'unconfirmed')
		.then(unconfirmedorders => {
			res.json(unconfirmedorders);
		}
	)
	.catch(err => res.status(400).json('error getting unconfirmed orders.'))
}

module.exports = {
	handlegetUnconfirmedOrders
}
