module.exports = {
	plugins: [
		'prettier-plugin-svelte',
		'prettier-plugin-tailwindcss' // needs to be last
	],
	tailwindConfig: './tailwind.config.cjs',
	useTabs: true,
	pluginSearchDirs: false,
	overrides: [{ files: '*.svelte' }],
	arrowParens: 'avoid',
	endOfLine: 'lf',
	printWidth: 80,
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'none'
};
