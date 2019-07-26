module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
  coverageDirectory: './coverage/',
  coveragePathIgnorePatterns: [
    '.d.ts$',
    '.spec.ts',
    'src/index.ts',
    'src/config'
  ],
  collectCoverageFrom: ['src/**/*.ts'],
  moduleFileExtensions: ['ts', 'js', 'json']
};
