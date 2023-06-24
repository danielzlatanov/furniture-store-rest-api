const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

const jwtSecret = 'super-secret-stuff-101';
const tokenBlacklist = new Set();

async function register(email, password) {
	const existing = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
	if (existing) {
		throw new Error('Email is taken');
	}

	const user = await User.create({
		email,
		hashedPassword: await bcrypt.hash(password, 10),
	});

	return createToken(user);
}

async function login(email, password) {
	const user = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
	if (!user) {
		throw new Error('Incorrect email or password');
	}

	const match = await bcrypt.compare(password, user.hashedPassword);
	if (!match) {
		throw new Error('Incorrect email or password');
	}

	return createToken(user);
}

async function logout(token) {
	tokenBlacklist.add(token);
}

function createToken({ _id, email }) {
	const payload = {
		_id,
		email,
	};

	return {
		_id,
		email,
		accessToken: jwt.sign(payload, jwtSecret),
	};
}

function parseToken(token) {
	if (tokenBlacklist.has(token)) {
		throw new Error('Token is blacklisted');
	}

	return jwt.verify(token, jwtSecret);
}

module.exports = {
	register,
	login,
	logout,
	parseToken,
};
