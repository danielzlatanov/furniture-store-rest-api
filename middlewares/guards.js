function isUser() {
	return (req, res, next) => {
		if (req.user) {
			next();
		} else {
			res.status(401).json({ message: 'Please sign in first' });
		}
	};
}

function isGuest() {
	return (req, res, next) => {
		if (req.user) {
			res.status(400).json({ message: 'You are already signed in' });
		} else {
			next();
		}
	};
}

module.exports = {
	isUser,
	isGuest,
};
