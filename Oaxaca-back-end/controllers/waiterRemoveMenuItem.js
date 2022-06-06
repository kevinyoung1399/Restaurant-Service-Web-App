/**
*This is a handle function for removing menu item, used by restaurant staff.
*@constructor
*@param {*} req - request from front end - with food id.
*@param {*} res - response from back end - confiramation of removed food.
*@param {*} db - database - that stores food table.
*/
const handleWaiterRemoveMenuItem = ( req, res, db ) => {
	const { id, dish_name} = req.body;

	db('food')
		.where({
			id: req.body.id,
			dish_name: req.body.dish_name})
		.del()
		.then(res.json("food removed."))
}

module.exports = {
	handleWaiterRemoveMenuItem
};
