const Router = require('koa-router');
const router = new Router();
const Controller = require('../controllers/index');
const controller = new Controller();

router.get('/',async (ctx) => {
    console.time(`${ctx.method} ${ctx.url}`);
    await controller.index(ctx);
    console.timeEnd(`${ctx.method} ${ctx.url}`);
});

// router.get('/', async (ctx)=>{
//     await ctx.render('index.ejs');//为何koa-view的extension没有生效？
// });
router.get('/login',(ctx)=>{
    ctx.body = "login";
})

module.exports = router;