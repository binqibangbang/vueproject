import Vue from 'vue'; //加载模块 从node modules
import VueRouter from 'vue-router'
import app from './app.vue';
import "../static/css/mui.css";
import '../static/js/mui';
Vue.use(VueRouter);
import axios from 'axios';
Vue.prototype.$http=axios;
axios.defaults.baseURL = 'http://127.0.0.1:8899';
// 引用组件
import home from './components/home/home.vue';
import cart from './components/cart/cart.vue';
import search from './components/search/search.vue';
import member from './components/member/member.vue';

import news from './components/home/news/news.vue';
import connect from './components/home/connect/connect.vue';
import buy from './components/home/buy/buy.vue';
import message from './components/home/message/message.vue';
import share from './components/home/share/share.vue';
import vedio from './components/home/vedio/vedio.vue';

import newsdetail from './components/home/news/newsdetail.vue';
import sharedetail from './components/home/share/sharedetail.vue';

const router = new VueRouter({
  routes:[
      {path:'/',redirect:'/home'},
      {path:'/home',component:home},
      {path:'/cart',component:cart},
      {path:'/member',component:member},
      {path:'/search',component:search},
      {path:'/news',component:news},
      {path:'/connect',component:connect},
      {path:'/buy',component:buy},
      {path:'/message',component:message},
      {path:'/share',component:share },
      {path:'/vedio',component:vedio },
      {path:'/newsdetail/:id',component:newsdetail,props:true},
      {path:'/sharedetail/:id',component:sharedetail,props:true}
  ]  
})

let vm=new Vue({
    el:'#app',
    render:function(createElement){ //创建一个组件
        return createElement(app)
    },
    router
})
