import rp from 'request-promise';
import _ from 'lodash';
import chalk from 'chalk';

const DEFAULTS = {
	resolveWithFullResponse: true,
	transform: function (body, response) {
		let data = response.toJSON();
		data.body = JSON.parse(body);

		return data;
	}
};

export default function request(obj = {}) {
	let options = obj;

	if (typeof obj === 'string') {
		options = {
			url: obj
		}
	}

	// console.log(`${chalk.blue((options.method || 'GET').toUpperCase())} ${chalk.blue(options.url)}`);

	return rp(_.defaults(options, {method: 'GET'}, DEFAULTS));
}

export function get(url) {
	return request({
			url,
			method: 'GET'
		});
}

export function post(url, data) {
	return request({
			url,
			method: 'POST'
		});
}

// Named 
request.get = get;
request.post = post;