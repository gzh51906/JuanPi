const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports = {
    entry: {
        main: './src/main.js'
    },

    devServer: {
        contentBase: './src'
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        },
        extensions:['.js','.jsx']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, './src'),
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react'],
                        plugins:[
                            ["import", {
                              "libraryName": "antd",
                              "libraryDirectory": "es",
                              "style": "css" // `style: true` 会加载 less 文件
                            }]
                        ]
                    }
                },
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },


    plugins: [
        new HtmlWebpackPlugin({
            // 指定模板文件
            template: './src/template.html',
            // filename:'main.html'
        })
    ]
}