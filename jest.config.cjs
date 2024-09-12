module.exports = {
	transform: {
		'^.+\\.[t|j]sx?$': 'babel-jest',
	},
	moduleNameMapper: {
		'^.+\\.(jpg|jpeg|png|gif|webp|svg|css)$': 'jest-transform-stub',
		'^shared/(.*)$': '<rootDir>/src/shared/$1',
		'^entities/(.*)$': '<rootDir>/src/entities/$1',
		'^features/(.*)$': '<rootDir>/src/features/$1',
		'^app/(.*)$': '<rootDir>/src/app/$1',
		'^widgets/(.*)$': '<rootDir>/src/widgets/$1',
	},
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['<rootDir>/node_modules/'],
};
