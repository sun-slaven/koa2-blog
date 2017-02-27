/** *******
*  Author : Slaven
*  Created On : Wed Feb 22 2017
******* **/

import Vue from 'vue';
import VueRouter from 'vue-router';
import filters from './filters/index';
import directives from './directives';
import routes from './config/routes';
import Home from './views/Home.vue';

Vue.use(VueRouter);

// filters
Object.keys(filters).forEach((k) => {
    Vue.filter(k, filters[k]);
});

// directives
Object.keys(directives).forEach((k) => {
    Vue.directive(k, directives[k]);
});

// routes
const router = new VueRouter({
    routes,
    linkActiveClass: 'active'
});

//event register
Vue.prototype.$eventHub= Vue.prototype.$eventHub ||  new Vue()

const app = new Vue({
    template: "<home></home>",
    components: {
        Home
    },
    router
}).$mount('#app');
