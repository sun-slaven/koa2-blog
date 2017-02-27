/** *******
*  Author : Slaven
*  Created On : Tue Feb 21 2017
******* **/

class User {
    async updateAvator(ctx) {
        // console.log(this);
        ctx.body = {
            a: 'a'
        };
    }
    async updateUsername(ctx) {
        
    }
    async updatePassword(ctx) {
        ctx.body = {
            status: true
        }
    }
}
module.exports = User;