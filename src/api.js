import express from 'express';

let app = express();

app.all('/api/hello-method', (req, res) => {
	res.json({
		hello: req.method
	});
});

let server = app.listen(3000, () => {
	console.log('API listening on http://localhost:3000');
});