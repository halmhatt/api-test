import express from 'express';
import morgan from 'morgan';

let app = express();

app.use(morgan('dev'));

app.all('/api/hello-method', (req, res) => {
	res.json({
		hello: req.method
	});
});

let server = app.listen(3000, () => {
	console.log('API listening on http://localhost:3000');
});