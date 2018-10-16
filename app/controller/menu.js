'use strict';

const Controller = require('egg').Controller;

// const Joi = require('joi');

class SystemController extends Controller {
  async allMenu() {
    const {ctx, service} = this;

    ctx.validate({
      role_id: 'int'
    }, ctx.params);

    const {role_id} = ctx.params;

    const result = await service.menu.allMenu(role_id)

    // console.log('reee:', result)

    ctx.body = ctx.helper.convertTree(result);
  }

  async createMenu() {
    const {ctx, service} = this;

    ctx.validate({
      father_id: 'int',
      name: 'string',
      url: 'string',
      icon: 'string',
      state: 'int',
    }, ctx.request.body);

    ctx.body = await service.menu.createMenu(ctx.request.body);
  }

  async getMenu() {
    const {ctx, service} = this;

    ctx.validate({
      id: 'int'
    }, ctx.params);

    const {id} = ctx.params;

    const result = await service.menu.getMenu(id);
    // console.log('rrrrr:', result);
    ctx.body = result;
  }

  async modifyMenu() {
    const {ctx, service} = this;

    ctx.validate({
      father_id: 'int',
      name: 'string',
      url: 'string',
      icon: 'string',
      state: 'int',
      id: 'int',
    }, Object.assign(ctx.params, ctx.request.body));

    ctx.body = await service.menu.modifyMenu(ctx.params.id, ctx.request.body);
  }

  async deleteMenu() {
    const {ctx, service} = this;

    ctx.validate({
      id: 'int',
    }, Object.assign(ctx.params));

    ctx.body = await service.menu.deleteMenu(ctx.params.id, {deletedAt: Date.now()});
  }


}

module.exports = SystemController;
