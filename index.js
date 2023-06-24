const express = require('express');
const cors = require('./middlewares/cors.js');
const mongoose = require('mongoose');
const authController = require('./controllers/authController.js');

const connectionString = 'mongodb://localhost:27017/furniture';

start();
async function start() {
	try {
		await mongoose.connect(connectionString, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Database connected');
	} catch (err) {
		console.error('DB Error ->' + err.message);
		process.exit(1);
	}

	const app = express();
	app.use(express.json());
	app.use(cors());

	app.get('/', (req, res) => {
		res.json({ message: 'REST service operational' });
	});

	app.use('/users', authController);

	app.listen(3030, () => console.log('REST service started'));
}
