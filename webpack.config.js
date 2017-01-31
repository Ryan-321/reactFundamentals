var HTMLWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'./app/index.js' // Explicitly point out entry point
	],
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
			{test: /\.css$/, loader: "style-loader!css-loader"}
		] // Where we tell webpack what we want to run our program through
	},
	output: {
		filename: 'index_bundle.js',
		path: __dirname + '/dist'
	},
	plugins: [HTMLWebpackPluginConfig]
}
