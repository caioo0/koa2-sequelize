const koa = require('koa')  //引入 koa
const app = new koa() // 生命

const router = require("./router/router")  //引入路由
const { koaBody } = require('koa-body');

app.use(koaBody({
    enableTypes: ['json', 'form', 'text'],
    multipart: true // 是否支持 multipart-formdate 的表单
}));

/**
 * router.routers() 启动路由
 * router.allowedMethods() 运行任何请求 --- get/post/put/delete等
 */
app.use(router.routes(),router.allowedMethods())

const hostName = '0.0.0.0'; //ip
const port = 3031; //端口
app.listen(port,hostName)  //http://localhost:3031
console.log('运行网址：http://localhost:3031');