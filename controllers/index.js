/**
 * Created by Slaven on 2017/2/20.
 */
class User {
    async index (ctx) {
        await ctx.render('index.ejs');
    }
}
module.exports = User;