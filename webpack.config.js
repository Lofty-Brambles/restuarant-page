const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		script: "./src/script.js"
	},
	output: {
		filename: "script.js",
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "assets/[name][ext]",
		clean: true
	},
	plugins: [
		new htmlWebpackPlugin({
			title: "Morninz'!",
			meta: {
				viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
			}
		})
	],
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: [
					"style-loader",
					"css-loader",
					"resolve-url-loader",
					{
						loader: "sass-loader",
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.(png|jpe?g|svg|gif|webp)$/i,
				type: "asset/resource"
			}
		]
	}
};