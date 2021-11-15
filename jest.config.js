module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  moduleNameMapper: {
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$':
      '<rootDir>/__mocks__/fileMock.js',
    // sin CSS modules
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '@/(.*)': '<rootDir>/$1',
    '@Components/(.*)': '<rootDir>/src/components/$1',
    '@Views/(.*)': '<rootDir>/src/views/$1',
    '@Hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@Constants': '<rootDir>/src/constants.ts',
    '@Types': '<rootDir>/src/types.ts',
    '@Utils': '<rootDir>/src/utils.ts',
    '@Service': '<rootDir>/src/service',
    '@Service/(.*)': '<rootDir>/src/service/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}
