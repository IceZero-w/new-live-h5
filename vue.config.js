const path = require('path')

module.exports = {
	lintOnSave: false,
	// publicPath: '/live-h5/',
	configureWebpack: {
    resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src/'),
			}
		},
		plugins: [
		]
	},
	// 自动格式化，标签dom上的px to vw
	chainWebpack: (config) => {
		config.module
		.rule('vue')
		.test(/\.vue$/)
		.use('style-vw-loader')
			.loader('style-vw-loader')
	},
	devServer: {
    proxy: {
			'/apicloud/Alive/':  {
        target: 'http://api4.hcjuquan.com',
        ws: true,
        changeOrigin: true
      },
		}
  }
}