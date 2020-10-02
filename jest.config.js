'use strict';

module.exports = {
	testEnvironment: 'jsdom',
	testMatch: ['<rootDir>/components/**/*.test.jsx'],
	transformIgnorePatterns: [
		'/node_modules/',
    ],
	setupFilesAfterEnv: [
		'<rootDir>/jest.setup.js',
	],
	moduleNameMapper: {
		'\\.(css|scss)$': 'identity-obj-proxy',
	},
	bail: true,
	displayName: 'rcom-raptorui-article',
};
