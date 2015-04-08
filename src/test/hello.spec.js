import request from '../lib/req';
import 'babel/polyfill';

request.setBaseUrl('http://localhost:3000');

describe('GET /api/hello-method', function () {
	let req = request.get(`/api/hello-method`);

	it('should have hello', async function (done) {
		let {body, statusCode, headers} = await req;

		expect(statusCode).toBe(200);
		expect(body.hello).toBe('GET');

		// Check header
		expect(headers['content-type']).toMatch(/application\/json/);

		done();
	});
});

describe('POST /api/hello-method', function () {
	let req = request.post(`/api/hello-method`);

	it('should respond with hello POST', async function (done) {
		let {body} = await req;

		expect(body.hello).toBe('POST');

		done();
	});
});

describe('Multiple requests', function () {
	it('should GET /api/hello-method and then POST same url', async function (done) {
		var {statusCode, body} = await request.get(`/api/hello-method`);

		expect(statusCode).toBe(200);
		expect(body.hello).toBe('GET');

		var {statusCode, body} = await request.post(`/api/hello-method`);
		expect(statusCode).toBe(200);
		expect(body.hello).toBe('POST');
		done();
	});
});