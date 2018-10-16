'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1538115982042_3012';

  // 配置需要的中间件，数组顺序即为中间件的加载顺序
  config.middleware = ['responseHandler'];

  config.sequelize = {
    username: '*****',
    password: '******',
    database: '*****',
    host: '*****.rds.aliyuncs.com',
    dialect: 'mysql',
    port: ****,
  };

  config.security = {
    csrf: {
      enable: true, // 开启csrf防范
      // ignore: ctx => ctx.isInnerIp(ctx.ip), // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
      // queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
      // bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
    },
  };

  exports.validate = {
    convert: true,
    // validateRoot: false,
  };

  // config.xframe = {
  //   enable: false,
  // };

  // config.redis = {
  //   client: {
  //     port: 6379, // Redis port
  //     host: '127.0.0.1', // Redis host
  //     password: 'auth',
  //     db: 0,
  //   },
  // }

  return config;
};

