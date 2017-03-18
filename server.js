'use strict';

const browserSync = require('browser-sync');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');
const bundler = webpack(webpackConfig);
const bs = browserSync.create();
var proxy = require('http-proxy-middleware');

bs.init({
  logPrefix: 'AMT',
  server: {
    baseDir: [
      'dist',
    ],
    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        stats: {colors: true},
      }),
      // bundler should be the same as above
      webpackHotMiddleware(bundler),
      proxy('/search-ajaxsearch-searchall',
            {
              target:'http://v5.pc.duomi.com',
              changeOrigin:true
            }
      ),
      proxy('/channel/listjson',
            {
              target:'http://image.baidu.com',
              changeOrigin:true
            }
      ),
    ]
  },
});
