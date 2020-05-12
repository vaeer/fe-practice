module.exports = {
    port: 3333, // 端口号
    open: true, // 自动打开
    hot: true, // 是否使用热更新
    watchOptions: {
        ignored: /node_modules/
    },
    overlay: {
        warnings: true,
        errors: true
    },
    stats: {
        warnings: 'errors-only'
    },
    compress: true, // 压缩
    historyApiFallback: true,
}