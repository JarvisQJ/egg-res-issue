'use strict';

module.exports = (option, app) => {
  // 中间件的配置项，框架会将 app.config[${middlewareName}] 传递进来
  return async function (ctx, next) {
    try {
      console.log('22222')
      await next();
      console.log('11111', ctx.body);
      ctx.body = Object.assign({code: 1, message: '执行成功'}, {data: ctx.body || null});
      console.log('4444', ctx.body);
    } catch (err) {
      // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
      app.emit('error', err, this);
      const status = err.status || 500;
      // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
      const error_msg = status === 500 && app.config.env === 'prod'
        ? 'Internal Server Error'
        : err.message;
      // 从 error 对象上读出各个属性，设置到响应中
      console.log('3333')
      ctx.body = {
        code: 0,
        message: error_msg
      };
      ctx.status = status;
    }
  };
};
