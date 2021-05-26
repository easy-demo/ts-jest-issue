export default {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    collectCoverage: true,
    coverageReporters: ['text-summary', 'lcov'],
    collectCoverageFrom: ['<rootDir>/index.ts'],
    testMatch: ['<rootDir>/*.test.ts'],
    globals: {
      'ts-jest': {
        useESM: true,
      },
    },
    extensionsToTreatAsEsm: ['.ts'],
  };
  