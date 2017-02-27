/**
 * Created by Slaven on 2017/2/20.
 */
const path = require('path');
const Koa = require('koa');
const app = new Koa();
const server = require('koa-static');//需要静态文件中间件作为静态资源服务器
const session = require('koa-session')
const convert = require('koa-convert');
const bodyParser = require('koa-bodyparser')();
const onerror = require('koa-onerror');//format error stack
const logger = require('koa-logger')();
const views = require('koa-views');
const router = require('./routes/index');
// const bootstrap = require('./middlewares/bootstrap');

global.Promise = require('bluebird');
app.keys = ['keys', 'slaven'];
app.use(convert(server(path.resolve())));

// var CONFIG = {
//   key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
//   maxAge: 60, /** (number) maxAge in ms (default is 1 days) */
//   overwrite: true, /** (boolean) can overwrite or not (default true) */
//   httpOnly: true, /** (boolean) httpOnly or not (default true) */
//   signed: true, /** (boolean) signed or not (default true) */
// };

onerror(app);
app.use(convert(session(app)));
app.use(convert(bodyParser));
app.use(convert(logger));
app.use(views(path.resolve('./views')));

// app.use(bootstrap);

app.use(router.routes(), router.allowedMethods());

app.listen(4000);