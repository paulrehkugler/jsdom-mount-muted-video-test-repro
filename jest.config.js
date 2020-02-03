// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  setupFiles: ["<rootDir>/jest-setup.js"],

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/tests.js?(x)"],

  transform: {
    ".(js|jsx)": "./node_modules/babel-jest"
  }
};
