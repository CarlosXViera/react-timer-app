var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		'script-loader!jquery/dist/jquery.min.js',
		'script-loader!foundation-sites/dist/js/foundation.min.js',
		'./src/app.jsx'
	],
	externals: {
		jquery: 'JQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'window.$': "jquery",
			'window.jQuery': "jquery"
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			Main: 'src/components/Main.jsx',
			Nav:'src/components/Nav.jsx',
			Timer: 'src/components/Timer.jsx',
			Countdown: 'src/components/Countdown.jsx',
			Clock: 'src/components/Clock.jsx',
			CountdownForm: 'src/components/CountdownForm.jsx',
			Controls: 'src/components/Controls.jsx',
			applicationStyles: 'src/styles/app.scss'
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [{
			loader: 'babel-loader',
			query: {
				presets: ['react', 'env', 'stage-0']
			},
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/
		}]
	},
	devtool: 'cheap-module-eval-source-map'
};
