import Vue from 'vue';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import axios from 'axios';

import App from './app.vue';
import CreateItem from './components/createItem/createItem.vue';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const routes = [{
    name: 'createItem',
    path: '/',
    component: CreateItem
}];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
