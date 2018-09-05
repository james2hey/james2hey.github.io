import Vue from 'vue'
import App from './App.vue'
import James from './James.vue'
import Home from './Home.vue'
import Auctions from './Auctions.vue'
import Profile from './Profile'
import MyBids from './MyBids'
import MyAuctions from './MyAuctions'
import Auction from './Auction.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
    {
        path: "/",
        component: James
    },
    {
        path: "/home",
        name: "Home",
        component: Home
    },
    {
        path: "/auctions",
        name: "Auctions",
        component: Auctions
    },
    {
        path: "/auctions/:auctionId",
        name: "Auction",
        component: Auction
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile
    },
    {
        path: "/mybids",
        name: "MyBids",
        component: MyBids
    },
    {
        path: "/myauctions",
        name: "MyAuctions",
        component: MyAuctions
    }
];


const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});