const webpack = require('webpack')
const path = require('path')
const utils = require('./config/utils')
module.exports = {
    entry:utils.entries,
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    plugins:[].concat(utils.htmlPlugin()),
    mode: 'development',
    devServer:{
        port:'8090',
        open: true,
        openPage: 'dist/page1.html'
    }
}