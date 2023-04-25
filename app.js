const koa = require('koa')  //引入 koa
const app = new koa() // 生命

const router = require("./router/router")  //引入路由

const  koaBody   = require('koa-body')

app.use(koaBody ())

// app.use(koaBody ({
//     enableTypes: ['json','form','text'],
//     multipart:true  //是否支持multipart-formdate 的表单
// }))

/**
 * router.routers() 启动路由
 * router.allowedMethods() 运行任何请求 --- get/post/put/delete等
 */
app.use(router.routes(),router.allowedMethods())

app.listen(3030)  //http://localhost:3030
