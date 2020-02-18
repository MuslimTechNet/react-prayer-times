var path = require('path');

module.exports = {
    mode: 'development',

    entry:{
      'demo':'./src/demo.js'
    },
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: 'demo.js'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            exclude: /(node_modules|bower_components|build)/,
            loader: 'babel-loader',
            options:{
                presets: ['env']
            }
          },
          {
            test: /\.scss$/,
            loader: 'inline-css-webpack-loader'
          }
        ]
    }
}
