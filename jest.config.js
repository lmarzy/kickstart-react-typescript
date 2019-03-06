module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/config/test-preprocessor.js',
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/mock-file.js',
  },
  testMatch: ['<rootDir>/**/**/*.(test|spec).(ts|tsx|js)'],
};
