const path = require("path");
const glob = require('glob');

// 获取所有 TypeScript 文件的路径
const entries = glob.sync('./**/*.ts', {
    ignore: ['./_types/**/*.ts', './node_modules/**/*.ts', './scripts/**/*.ts']
}).reduce((acc, filePath) => {
    const entry = filePath.replace('.ts', '.js');
    // console.log("路径：", filePath)
    acc[entry] = "./" + filePath;
    return acc;
}, {});
module.exports = {
    mode: "development",
    devtool: false,
    entry: entries,
    stats: 'errors-only', // 只输出错误信息
    output: {
        filename: "[name]",
        path: path.resolve(__dirname, '../src/js'),
        library: 'ccf', // 你希望在全局作用域中使用的变量名
        libraryTarget: 'var', // 将库附加到 window 对象
    },
    optimization: {
        minimize: false
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
}