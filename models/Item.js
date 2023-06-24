const { Schema, model, Types } = require('mongoose');

const imgPattern = /https?:\/\/.*/i;

const itemSchema = new Schema({
	make: { type: String, required: true, minLength: [4, 'Make must be at least 4 characters long'] },
	model: { type: String, required: true, minLength: [4, 'Model must be at least 4 characters long'] },
	year: {
		type: Number,
		required: true,
		min: [1950, 'Year must be between 1950 and 2023'],
		max: [2023, 'Year must be between 1950 and 2023'],
	},
	description: { type: String, required: true, minLength: [10, 'Description must be at least 10 characters long'] },
	price: { type: Number, required: true, min: [0.1, 'Price must be a positive number'] },
	img: {
		type: String,
		required: true,
		validate: {
			validator: val => val.match(imgPattern),
			message: 'Image url should start with http:// or https://',
		},
	},
	material: { type: String, default: '' },
	_ownerId: { type: Types.ObjectId, ref: 'User', required: true },
});

const Item = model('Item', itemSchema);
module.exports = Item;
