'use strict';

//首页

module.exports = app => {
  const router = app.router.namespace('/system');
  const {controller} = app;


  // 当前角色的用户所有可见菜单
  router.get('/menu/all/:role_id', controller.menu.allMenu);
  router.post('/menu', controller.menu.createMenu);
  router.get('/menu/:id', controller.menu.getMenu);
  router.put('/menu/:id', controller.menu.modifyMenu);
  router.delete('/menu/:id', controller.menu.deleteMenu);

};
