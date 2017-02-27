/** *******
*  Author : Slaven
*  Created On : Wed Feb 22 2017
******* **/

import Vue from 'vue';
import filters from './filters/index';
import directives from './directives';
import LoginApp from './views/Login.vue';
console.log(LoginApp);
// filters
Object.keys(filters).forEach((k) => {
    Vue.filter(k, filters[k]);
});

// directives
Object.keys(directives).forEach((k) => {
    Vue.directive(k, directives[k]);
});

new Vue({
    el: '#app',
    template: '<login-app></login-app>',
    components: {
        LoginApp
    }
});