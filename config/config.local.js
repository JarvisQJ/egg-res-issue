'use strict';

module.exports = () => {
  const config = exports = {};

  config.security = {
    csrf: {
      enable: false, // 关闭csrf防范
      // ignore: ctx => ctx.isInnerIp(ctx.ip), // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
      // queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
      // bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
    },
  };

  config.redis = {
    client: {
      port: 6379, // Redis port
      host: 'test.cicgold.cn', // Redis host
      password: 'zhangwei-/~123',
      db: 0,
    },
  };


  return config;
};

