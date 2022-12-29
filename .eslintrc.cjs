module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:tailwindcss/recommended',
		'prettier'
	],
	plugins: ['svelte3', '@typescript-eslint', 'prettier', 'tailwindcss'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript'),
		tailwindcss: {
			removeDuplicates: true,
			config: 'tailwind.config.cjs'
		}
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'tailwindcss/classnames-order': 'warn',
		'tailwindcss/no-custom-classname': 'warn',
		'tailwindcss/no-contradicting-classname': 'error'
	}
};
