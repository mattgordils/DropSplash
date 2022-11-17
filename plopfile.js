module.exports = function (plop) {
	// module generator
	plop.setGenerator('module-sanity', {
		description: 'React component generator',
		prompts: [
			{
				type: 'input',
				name: 'componentName',
				message: 'Module name please. ie: (ModuleName)'
			}
		],
		actions: [
			{
				type: 'add',
				path: 'components/{{componentName}}/{{componentName}}.jsx',
				templateFile: 'plop-templates/Component/Component.jsx.hbs'
			},
			{
				type: 'add',
				path: 'components/{{componentName}}/index.js',
				templateFile: 'plop-templates/export.js.hbs'
			}
		]
	})
	plop.setHelper('toLowerCase', str => str.toLowerCase())
	plop.setHelper('titleCase', str => {
		if (typeof str === 'undefined') {
			return ''
		}

		return (
			str.replace(
				/\w\S*/g,
				txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
			)
		)
	})
}
