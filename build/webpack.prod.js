// webpack.prod.js
// 存放 prod 配置
const path = require('path');
// 合并配置文件
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//压缩js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//压缩css
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
    module: {
    },
    plugins: [
        new CleanWebpackPlugin(),
        new UglifyJsPlugin(),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
        })

    ],
    mode: 'production',
    output: {
        filename: 'js/[name].[contenthash].js', //contenthash 若文件内容无变化，则contenthash 名称不变
        path: path.resolve(__dirname, '../dist')
    },
});



