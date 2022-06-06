/**
*This is a handle function for getting whole food menu.
*@constructor
*@param {*} req - request from front end - for food items.
*@param {*} res - response from back end - table with all the data from food table.
*@param {*} db - database - to access the food table.
*/
const handleCustomerGetMenu = (raq, res, db )=> {
	db.select('*').from('food')
		.then(a => {
			res.json(a);
		}
	)
	.catch(err => res.status(400).json('error getting food.'))
}

module.exports = {
	handleCustomerGetMenu
}
