module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
      'assets': 'src/assets',
      'common': 'src/common',
      '@c': 'src/components',
      'network': 'src/network',
      'configs': 'src/configs',
      'views': 'src/views',
      'plugins': 'src/plugins',
      }
    }
  },

  // devServer Options don't belong into `configureWebpack`

  devServer: {

      public: '0.0.0.0:8080',

      hot: true,

      disableHostCheck: true,

  }



};


