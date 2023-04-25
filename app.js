const koa = require('koa')  //引入 koa
const app = new koa() // 生命

const Router = require("koa-router")  //引入路由
const router = new Router()

//添加一个入口
router.get('/',ctx =>{
    ctx.body = "我最帅!"
})

router.get('/user',ctx => {
    ctx.body = "这是用户页"
})

/**
 * router.routers() 启动路由
 * router.allowedMethods() 运行任何请求 --- get/post/put/delete等
 */
app.use(router.routes(),router.allowedMethods())

app.listen(3030)  //http://localhost:3030
