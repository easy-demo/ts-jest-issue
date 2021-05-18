module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    coverageReporters: ['text-summary', 'lcov'],
    collectCoverageFrom: ['<rootDir>/index.ts'],
    testMatch: ['<rootDir>/*.test.ts'],
  };
  