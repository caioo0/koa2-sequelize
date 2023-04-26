const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const { koaBody } = require('koa-body');

router.get('/users', koaBody(), (ctx) => {
    console.log(ctx.request.body);
    // => POST body
    ctx.body = JSON.stringify(ctx.request.body);
});

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


app.use(router.routes());

const hostName = '0.0.0.0'; //ip
const port = 3100; //端口
app.listen(port,hostName)  //http://localhost:3030
console.log('curl -i http://172.27.32.1:3100/users -d "name=test"');