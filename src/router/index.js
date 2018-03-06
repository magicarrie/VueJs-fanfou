// 引入路由组件
import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Friends from '@/components/friends';
import lookAround from '@/components/lookAround';
import idUpload from '@/components/idUpload';

import Personalmsg from '@/components/Personalmsg';
import Vuex from '@/components/vuex';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/home/friends',
          name: 'Friends',
          component: Friends
        },
        {
          path: '/home/lookAround',
          name: 'lookAround',
          component: lookAround
        },
        {
          path: '/home/idUpload',
          name: 'idUpload',
          component: idUpload
        }
      ]
    },
    {
      path: '/personalmsg',
      name: 'Personalmsg',
      component: Personalmsg
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: Vuex
    }
  ]
});
