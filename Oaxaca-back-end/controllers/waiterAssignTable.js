const handleWaiterAssignTable = (req, res, db )=> {

	const { email } = req.body;

	db.select('tablenumber').from('tables').where('assigned', false).limit(1)
		.then(table => {
			db.update({tableassigned: table}).from('users').where('email', req.body.email);
			res.json(table);
		}
	)
	.catch(err => res.status(400).json('error getting not assigned table.'))
}

module.exports = {
	handleWaiterAssignTable
}
