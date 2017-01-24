var webpack = require('webpack');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/js/foundation.min.js',
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
