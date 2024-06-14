const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./main.tsx",
    devtool: "inline-source-map",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    devServer: { static: "./dist", port: 3000, historyApiFallback: true },
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".jsx", ".ts", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "index.html" }),
        new Dotenv(),
        new FaviconsWebpackPlugin("./public/icon.png")
    ]
};
