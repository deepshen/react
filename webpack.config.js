var webapck = require('webpack');
var path = require('path');
var htmlPlugin = require('html-webpack-plugin')
module.exports={
    entry:'./src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader: "babel-loader",
                query: {
                    plugins:['transform-runtime'],
                    presets:['es2015','react','stage-2']
                }
            },
            {
                test:/\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test:/\.less$/,
                loader: "style-loader!css-loader!less-loader"
            }
        ]
    },
    resolve: {
        alias: {
            'jquery':'jquery'
        },
        extensions: ['*','.js','.less','.json','.css']
    },
    plugins: [
        new webapck.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery'
        }),
        new htmlPlugin({
            filename:'index.html',
            template:'./index.html'
        })
    ]
};