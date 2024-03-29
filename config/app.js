const path = require('path');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const env = process.env.NODE_ENV;
const apiRoutes = require('../routes');
const fs = require('fs');
const fileDir = './files';

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('../swagger.json');

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', apiRoutes);
app.use(express.static(path.resolve(__dirname, '..') + '/dist'));

if (!fs.existsSync(fileDir)) {
  fs.mkdirSync(fileDir);
}

if (env === 'development') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  const webpack = require('webpack');
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpackConfig = require('./webpack');
  const compiler = webpack(webpackConfig);
  app.use(webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      modules: false,
      entrypoints: false,
      assets: false,
    },
  }));
  app.get('*', (req, res, next) => {
    const filename = path.resolve(compiler.outputPath, 'index.html');
    return compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) return next(err);
      res.set('content-type', 'text/html');
      res.send(result);
      return res.end();
    });
  });
} else {
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..') + '/dist/index.html'));
}

module.exports = app;
