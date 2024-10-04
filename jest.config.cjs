module.exports = {
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
	},
	moduleFileExtensions: ['js', 'jsx'],
	moduleNameMapper: {
		'^.+\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-stub',
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
		'^app/(.*)$': '<rootDir>/src/app/$1',
		'^pages/(.*)$': '<rootDir>/src/pages/$1',
		'^widgets/(.*)$': '<rootDir>/src/widgets/$1',
		'^features/(.*)$': '<rootDir>/src/features/$1',
		'^entities/(.*)$': '<rootDir>/src/entities/$1',
		'^shared/(.*)$': '<rootDir>/src/shared/$1',
	},
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['<rootDir>/node_modules/'],
	setupFilesAfterEnv: ['<rootDir>/src/app/config/setupTests.js'],
};
