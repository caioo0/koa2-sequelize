/**
 * router.js
 */

const Router = require("koa-router")
const router = new Router()


router.get('/', ctx => { ctx.body = "我最帅!" })
router.get('/user', ctx => { ctx.body = "这是用户页" })


router.get('/user/:id',ctx =>{
    const id = ctx.params.id
    if(id === 666)
    {
        ctx.body = {
            'code':200,
            'msg':'输入正确',
            'data':[]
        }
    }else
    {
        ctx.body = {
            'code': 201,
            'msg': '输入错误',
            'data': []
        }
    }

})

router.get('/role', ctx => { ctx.body = "这是用户角色页" })

router.post('/role', ctx => {
    const name = ctx.request.body.name || ""
    if (!name || name !== 'lurengao') {
        ctx.body = {
            'code': 200,
            'msg': '输入错误',
            'data': []
        }
    }else {
        ctx.body = {
            'code': 200,
            'msg': '你真帅',
            'data': []
        }
    }
})

module.exports = router