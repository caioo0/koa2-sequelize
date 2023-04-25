/**
 * router.js
 */

const Router = require("koa-router")
const router = new Router()


router.get('/', ctx => { ctx.body = "我最帅!" })
router.get('/user', ctx => { ctx.body = "这是用户页" })

module.exports = router