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
            },
            {
                test:/\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test:/\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)\w*/,
                loader: 'url-loader?limit=10000'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]?[hash]'
                }
            },
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

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
