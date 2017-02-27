/** *******
*  Author : Slaven
*  Created On : Tue Feb 21 2017
******* **/

const Router = require('koa-router');
const router = new Router();
// const Controller = require('../controllers/login');
// const controller = new Controller();

router.get('/login', async (ctx) => {
    ctx.session = null;
    await ctx.render('./Login/index.html');
});

router.post('/login_valid', async (ctx) => {
    if(ctx.request.body.username === 'a' && ctx.request.body.password === 'a'){
        ctx.session.currentUser = {
            username: ctx.request.body.username,
            password: ctx.request.body.password
        }
        await ctx.redirect('/');
    }else{
        ctx.body = {
            errorMsg: "username or password invalid"
        }
    }
});

router.get('/logout', async (ctx) => {
    ctx.redirect('/login');
});
module.exports = router;