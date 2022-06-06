/**
*This is a handle function for registering to restaurant system.
*@constructor
*@param {*} req - request from front end - create account .
*@param {*} res - response from back end - account creation.
*@param {*} db - database - that stores users table.
*/

const handleRegister = ( req, res, db, bcrypt ) => {
	const { email, firstName, surname, type, password } = req.body;
	if (!email || !firstName || !surname || !password) {
		return res.status(400).json('register form is missing values.')
	}
	const hash = bcrypt.hashSync(password);
	db.transaction(trx => {
		trx.insert({
			hash: hash,
			email: email
		})
		.into('login')
		.returning('email')
		.then(loginEmail => {
			return trx('users')
			.returning('*')
			.insert({
				email: loginEmail[0],
				firstname: firstName,
				surname: surname,
				type: type,
				tableassigned: 0
			})
			.then(user => {
				res.json(user[0]);
			})
		})
		.then(trx.commit)
		.catch(trx.rollBack)
	})
	.catch(err => res.status(400).json('unable to register'))

}

module.exports = {
	handleRegister
};
