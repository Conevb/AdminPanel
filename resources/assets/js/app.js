
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './Store.js';

Vue.use(VueRouter);

import ProductsListComponent from './components/ProductsListComponent.vue'
import NavbarComponent from './components/NavbarComponent.vue'
import ProductComponent from './components/ProductComponent.vue'
import CartComponent from './components/CartComponent.vue'

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const routes = [
  { path: '/', component: ProductsListComponent},
  { path: '/proizvod/:id', component: ProductComponent, props: true  },
  { path: '/korpa', component: CartComponent }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
      NavbarComponent,
    }
});
