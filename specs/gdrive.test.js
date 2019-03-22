'use strict';

const superagent = require('superagent');
require('superagent-retry')(superagent);
const request = require('supertest');
const config = require('../configuration/config.json');
const token = require('../util/authToken');
const path = require("path");
let authTok = '';
let file_id = '';


describe('Gdrive API Test', () => {
	beforeAll(async () => {
		await token.getaccessToken().then(result => {
			authTok = 'Bearer ' + result.access_token;
		})
	})

	test('Upload a file', async () => {
		const response = await request(config.baseUrl).post('upload/drive/v3/files')
			.set('Content-Type', 'application/vnd.google-apps.document')
			.set('Authorization', authTok)
			.attach('file', path.join(__dirname, '../', 'testdata/drive.docx'))
			.retry(3);
		file_id = await response.body.id;
		await expect(response.statusCode).toBe(200);
	})

	test('Retrieve the uploaded file', async () => {
		const response = await request(config.baseUrl).get('drive/v3/files/' + file_id)
			.set('Authorization', authTok)
			.retry(3);
		await expect(response.statusCode).toBe(200);
		await expect(response.body.id).toBe(file_id);
	})

	test('Delete the file', async () => {
		const response = await request(config.baseUrl).delete('drive/v3/files/' + file_id)
			.set('Authorization', authTok)
			.retry(3);
		expect(response.statusCode).toBe(204);
	})

});