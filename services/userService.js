const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

const jwtSecret = 'super-secret-stuff-101';

async function register(email, password) {
	const existing = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
	if (existing) {
		throw new Error('Email is taken');
	}

	const user = await User.create({
		email,
		hashedPassword: await bcrypt.hash(password, 10),
	});

	return {
		_id: user._id,
		email: user.email,
		accessToken: createToken(user),
	};
}

async function login(email, password) {}

async function logout() {}

function createToken({ _id, email }) {
	const payload = {
		_id,
		email,
	};

	return jwt.sign(payload, jwtSecret);
}

function parseToken(token) {}

module.exports = {
	register,
	login,
	logout,
	parseToken,
};
