const { isUser } = require('../middlewares/guards.js');
const { getAll, create } = require('../services/itemService.js');
const { parseError } = require('../util/parser.js');

const dataController = require('express').Router();

dataController.get('/', async (req, res) => {
	const items = await getAll();
	res.json(items);
});

dataController.post('/', isUser(), async (req, res) => {
	try {
		const data = Object.assign({ _ownerId: req.user._id }, req.body);
		const item = await create(data);
		res.json(item);
	} catch (error) {
		const message = parseError(error);
		res.status(400).json({ message });
	}
});

module.exports = dataController;
