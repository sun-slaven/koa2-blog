/** *******
*  Author : Slaven
*  Created On : Tue Feb 21 2017
******* **/

const Router = require('koa-router');
const Controller = require('../controllers/post');
const controller = new Controller();
const router = new Router();

router.get('/:post_id/details', async (ctx) => {

});

router.get('/:post_id/update', async (ctx) => {

});

router.get('/:post_id/delete', async (ctx) => {

});

module.exports = router;