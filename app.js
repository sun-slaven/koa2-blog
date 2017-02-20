/**
 * Created by Slaven on 2017/2/20.
 */
const Koa = require('koa');
const convert = require('koa-convert');
const bodyParser = require('koa-bodyparser');
const views = require('koa-views');

const router = require('./routes/index');

const app = new Koa();
global.Promise = require('bluebird');

app.use(bodyParser());
app.use(views(__dirname + '/views'), {
    extension: 'ejs'
});

app.use(router.routes(),router.allowedMethods());

app.listen(4000);