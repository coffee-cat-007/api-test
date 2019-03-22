const superagent = require('superagent');
require('superagent-retry')(superagent);
const request = require('supertest');
const config = require('../configuration/config');

function getaccessToken() {
	const refreshToken = config.cred.refresh_token;
	const clientId = config.cred.client_id;
	const clientSecret = config.cred.client_secret;
	const refreshUrl = config.cred.refresh_url;
	let postBody = `grant_type=refresh_token&client_id=${clientId}&client_secret=${clientSecret}&refresh_token=${refreshToken}`;

	return request(refreshUrl).post('')
		.set('Content-Type', 'application/x-www-form-urlencoded')
		.send(postBody)
		.then(response => {
			return response.body;
		})
}

module.exports = {
	getaccessToken
};