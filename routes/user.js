/** *******
*  Author : Slaven
*  Created On : Tue Feb 21 2017
******* **/

const router = require('koa-router')();
const Controller = require('../controllers/user');
const controller = new Controller();

router.get('/avator', async (ctx) => {
    await controller.updateAvator(ctx);
});

router.get('/username', async (ctx) => {
    await controller.updateUsername(ctx);
});

router.post('/password', async (ctx) => {
    await controller.updatePassword(ctx);
});

module.exports = router;