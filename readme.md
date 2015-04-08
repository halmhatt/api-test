# API test

Test APIs with es7 and jasmine. 

## Usage
Start the API server

	npm start

Run the tests in a separate shell

	npm test

## Writing tests
The tests are written in Jasmine with es7 and babel as preprocessor. Check `src/test/hello.spec.js` for inspiration.

1. Import the `req` and polyfill with `babel`

	```js
	import request from '../lib/req';
	import 'babel/polyfill';
	```

2. Set base url if you like
	
	```js
	request.setBaseUrl('http://localhost:3000');
	```

3. Create a tests

	```js
	describe('GET /api/hello-method', function () {
		let req = request.get(`/api/hello-method`);

		it('should have hello', async function (done) {
			let {body, statusCode, headers} = await req;

			expect(statusCode).toBe(200);
			expect(body.hello).toBe('GET');

			done();
		});
	});
	```

## Request methods
The `request` gives `body, statusCode, headers` back.
