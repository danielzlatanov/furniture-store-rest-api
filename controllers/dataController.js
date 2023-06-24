const { isUser } = require('../middlewares/guards.js');
const { getAll, create, getById, update, del } = require('../services/itemService.js');
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

dataController.get('/:id', async (req, res) => {
	const item = await getById(req.params.id);
	res.json(item);
});

dataController.put('/:id', isUser(), async (req, res) => {
	const item = await getById(req.params.id);
	if (req.user._id != item._ownerId) {
		return res.status(403).json({ message: 'You cannot modify this product' });
	}

	try {
		const result = await update(req.params.id, req.body);
		res.json(result);
	} catch (error) {
		const message = parseError(error);
		res.status(400).json({ message });
	}
});

dataController.delete('/:id', isUser(), async (req, res) => {
	const item = await getById(req.params.id);
	if (req.user._id != item._ownerId) {
		return res.status(403).json({ message: 'You cannot remove this product' });
	}

	try {
		await del(req.params.id);
		res.status(204).end();
	} catch (error) {
		const message = parseError(error);
		res.status(400).json({ message });
	}
});

module.exports = dataController;
