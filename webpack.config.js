/**
 * Webpack Configuration
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { AngularCompilerPlugin } = require("@ngtools/webpack");

module.exports = function WebpackConfiguration() {
    return {
        entry: {
            app: "./src/app.ts"
        },
        output: {
            path: __dirname + "/dist",
            filename: "[name].js"
        },
        resolve: {
            extensions: [".ts", ".js"]
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: "@ngtools/webpack"
                },
                {
                    test: /\.html$/,
                    loader: "raw-loader"
                },
                {
                    test: /\.css$/,
                    loader: "raw-loader"
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: __dirname + "/src/index.html",
                output: __dirname + "/dist",
                inject: "head"
            }),
            new ScriptExtHtmlWebpackPlugin({
                defaultAttribute: "defer"
            }),
            new CopyWebpackPlugin([{
                from: "src/assets",
                to: "assets"
            }]),
            new AngularCompilerPlugin({
                tsConfigPath: "./tsconfig.json",
                entryModule: "./src/app/app.module#AppModule",
                sourceMap: true
            })
        ]
    };
};
