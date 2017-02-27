const router = require('koa-router')();
const loginRouter = require('./login');
const userRouter = require('./user');
const postRouter = require('./post');
const _ = require('lodash');

router.get('/', async (ctx) => {
    if(_.isUndefined(ctx.session.currentUser)){
        ctx.redirect('/login');
    }else{
        await ctx.render('Home/index.html');
    }
});


router.use(loginRouter.routes(), loginRouter.allowedMethods());
router.use(userRouter.routes(), userRouter.allowedMethods());
router.use(postRouter.routes(), postRouter.allowedMethods());

module.exports = router;
