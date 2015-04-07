import express from 'express';

let app = express();

app.get('/api/hello', (req, res) => {
	res.json({
		hello: 'moto'
	});
});

app.get('/api/echo', (req, res) => {
	res.json(req.data);
});

let server = app.listen(3000, () => {
	console.log('API listening on http://localhost:3000');
});