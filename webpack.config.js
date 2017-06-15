console.info('environment is ', process.env.NODE_ENV)
module.exports = process.env.NODE_ENV === 'production' ? require('./webpack.config.production.js') : require('./webpack.config.development.js');
