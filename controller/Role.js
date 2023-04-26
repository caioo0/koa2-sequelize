const BaseController = require("./BaseController");

class RoleController extends BaseController {
    static async getRole(ctx) {

        ctx.body = BaseController.renderJsonSuccess(200, '这是用户角色页')
    }

    static async getCurrectRole(ctx, next){

        const name = ctx.request.body.name || ""
        let msg  = 'role'
        let code = 200
        if (!name || name !== 'lurengao') {
            code = 400
            msg = '输入有误'
        }
        ctx.body = BaseController.renderJsonSuccess(code, msg, name)
    }
}

module.exports = RoleController