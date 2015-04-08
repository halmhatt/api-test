import request from '../lib/req';
import jsonPromise from 'json-promise';
import 'babel/polyfill';

const BASE_URL = 'http://localhost:3000';

describe('GET /api/hello-method', function () {
	let req = request.get(`${BASE_URL}/api/hello-method`);

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
	let req = request.post(`${BASE_URL}/api/hello-method`);

	it('should respond with hello POST', async function (done) {
		let {body} = await req;

		expect(body.hello).toBe('POST');

		done();
	});
});