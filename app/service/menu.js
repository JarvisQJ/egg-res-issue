'use strict';

const Service = require('egg').Service;

class Menu extends Service {
  async allMenu(role_id) {
    const menuIds = await this.ctx.model.SysRolemenu.findAll({
      raw: true,
      attributes: ['menu_id'],
      where: {
        role_id
      }
    }).map(function (item) {
      return item.menu_id;
    });

    return await this.ctx.model.SysMenu.findAll({
      raw: true,
      where: {
        state: 1,
        deletedAt: null,
        id: menuIds
      }
    });

  }

  async createMenu(model) {
    return await this.ctx.model.SysMenu.create(model);
  }

  async getMenu(id) {
    return await this.ctx.model.SysMenu.findById(id);
  }

  async modifyMenu(id, model) {
    return await this.ctx.model.SysMenu.update(model, {where: {id}});
  }


  async deleteMenu(id, model) {
    return await this.ctx.model.SysMenu.update(model, {where: {id}});
  }

  async find(id) {
    const user = await this.ctx.model.User.findById(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user;
  }

}

module.exports = Menu;