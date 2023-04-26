# koa2-server
## 快速生成项目
```shell
npm install koa-generator -g
```
## 相关加载包
```shell

yarn add mysql2
yarn add koa-body

# after install koa-body@6.0.0, get error: koaBody is not a function
# back to koa-body@5.0.0 everything is fine
```

## 自动引入
```shell
npm install require-directory --save   

//...
const Router = require('koa-router'); 
const requireDirectory = require('require-directory');
//module为固定参数，'./api'为路由文件所在的路径(支持嵌套目录下的文件)，第三个参数中的visit为回调函数
const modules = requireDirectory(module, './app/api', {
    visit: whenLoadModule
});
function whenLoadModule(obj) {
    if(obj instanceof Router) {
        app.use(obj.routes());
    }
}
```

运行地址：http://localhost:3030



## 教程

- [本项目教程](https://juejin.cn/post/7125867746172076069)
- [优雅的编写koa代码](https://blog.csdn.net/weixin_36295973/article/details/112311944)
- [sequelize中文文档](https://www.sequelize.cn/core-concepts/getting-started)
