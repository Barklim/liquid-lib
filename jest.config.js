/* eslint-env node */

module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  modulePathIgnorePatterns: ['<rootDir>/src/fields'],
};
