
## **In API testing we need to check the following :**

- Validation : To ensure correct development against the stated user needs and requirements (like correct environment integration and adherence to standards).
- Functional - To check how the API works technically. We will cover Testing the schema of request & response, response codes, error handling, edge cases, redirections and consistent results (reliability).
- Load Testing - To check if the API can handle large amount of calls.
- Security Testing - To check if the API has defined security requirements including authentication, authorization (permissions and access controls).
- Usability - To check how easy it is to use the API.
- Documentation - To check the API documentation is clear and easy to refer.

## Running the tests

```bash
npm install
npm run test

# Reports will be available in Reports folder.

```
## Linting the Code
```
npm run lint
```

## Vulnerability Check(for Dependencies)
```
npm run vulnerabilityCheck
```

## Built With

* [Jest](https://github.com/facebook/jest) - Runner and Assertions
* [Jest Html Reporter](https://github.com/Hargne/jest-html-reporter) - To Generate HTML reports
* [Supertest](https://github.com/visionmedia/supertest) - The library used for HTTP calls. Super-agent driven library for testing node.js HTTP servers using a fluent API
* [Superagent retry](https://github.com/segmentio/superagent-retry) - To add retry functionality to supertest.
Extends the node version of visionmedia/superagent's Request, adds a .retry method to add retrying logic to the request. Calling this will retry the request however many additional times you'd like.
* [Superagent](https://github.com/visionmedia/superagent) - Prerequisite for  superagent retry
* [ES Lint](https://github.com/eslint/eslint) - For Linting purpose. Using airbnb linting for this project.
