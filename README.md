# social-media-client

[![Automated Unit Testing](https://github.com/kribac12/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/kribac12/social-media-client/actions/workflows/unit-test.yml)
[![Automated E2E Testing](https://github.com/kribac12/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/kribac12/social-media-client/actions/workflows/e2e-test.yml)
[![Deploy static content to Pages](https://github.com/kribac12/social-media-client/actions/workflows/pages.yml/badge.svg?branch=master)](https://github.com/kribac12/social-media-client/actions/workflows/pages.yml)

## Introduction
This project uses Prettier and ESLint to ensure code quality and style consistency. It uses Jest and Cypress for unit- and end-to-end testing.

## Prerequisites 
Make sure you have Node.js (https://nodejs.org) installed on your system to handle dependencies and scripts.

## Installing
To set up the project locally:
1. Clone the repository: ```bash
git clone https://github.com/kribac12/social-media-client
2. Naviage to the project directory: `cd social-media-client`
3. Install dependencies: `npm install`

## Running the project
To build the CSS from SCSS files: `npm run build`

## Formatting and linting
To format the JavaScript files: `npm run format`

To lint the JavaScript files: `npm run lint`

To automatically fix linting errors: `npm run lint-fix`

## Husky setup
To use Husky for Git hooks: `npm run prepare`

## Testing

Run the following command to execute both unit and e2e tests: `npm run test`

### Unit tests
Run the following command to execute unit tests: `npm run test-unit`

These tests check login and logout functionality for token storage management.

### End-to-end tests
Run the following command to execute e2e tests: `npm run test-e2e-cli`

These tests check flows for user login, error handling for invalid credentions, and user logout.

## Reporting bugs
I have reported a bug using the Issues tab, please use this if you have any issues to report. 

