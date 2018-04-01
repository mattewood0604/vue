import Vue from 'vue';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import axios from 'axios';

import App from './app.vue';
import LandingComponent from './pages/landing/landing.vue';
import PostComponent from './pages/post/post.vue';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const routes = [{
    name: 'landing',
    path: '/',
    component: LandingComponent
}, {
    name: 'post',
    path: '/post/:id',
    component: PostComponent
}];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
