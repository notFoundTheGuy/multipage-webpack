// 参考地址 https://blog.csdn.net/lina2017lina/article/details/79103446
var glob = require('glob')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var PAGE_PATH = path.resolve(__dirname,'../src/pages')

// var merge = require('webpack-merge')

// 多入口配置
exports.entries = function () {
    var entryFiles = glob.sync(PAGE_PATH + '/*/*.js')
    var map = {}
    entryFiles.forEach((filePath) => {
        var filename = filePath.substring(filePath.lastIndexOf('\/') + 1,filePath.lastIndexOf('.'))
        map[filename] = filePath
    })
    return map
}

// 多页面输出配置
exports.htmlPlugin = function () {
    let entryHtml = glob.sync(PAGE_PATH + '/*/*.html')
    let arr = []
    entryHtml.forEach((filePath) => {
        let filename = filePath.substring(filePath.lastIndexOf('\/') + 1,filePath.lastIndexOf('.'))
        let conf = {
            // 模板来源
            template: filePath,
            // 文件名称
            filename: filename + '.html',
            chunks:[filename],
            inject: true
        }
        arr.push(new HtmlWebpackPlugin(conf))
    })
    return arr
}