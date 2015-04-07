import request from 'request-promise';
import jsonPromise from 'json-promise';
import 'babel/polyfill';

const BASE_URL = 'http://localhost:3000';

describe('/api/hello', function () {
	let req = request(`${BASE_URL}/api/hello`);

	it('should have hello', async function (done) {
		let response = await req.then(jsonPromise.parse);

		expect(response.hello).toBeDefined();
		done();
	});
});