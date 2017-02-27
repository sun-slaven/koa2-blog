import ShouYe from '../components/shouYe/Index.vue';
import Archieves from '../components/archieves/Index.vue';
import Me from '../components/me/Index.vue';
import Avator from '../components/me/Avator.vue';
import Password from '../components/me/Password.vue';

const routes = [
    { path: '/', component: ShouYe },
    { path: '/archieves', component: Archieves },
    { path: '/me', component: Me ,
        children: [
            {
                path: 'avator',
                component: Avator
            },
            {
                path: 'password',
                component: Password
            }
        ]
    }
]

export default routes;