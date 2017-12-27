import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Index from '@/components/index'
Vue.use(Router)


const red = { template: '<div style="background-color:#de5b5b;color:#fff; font-size:30px;line-height:100px;text-align:center;">red页面</div>' }
const yellow = { template: '<div style="background-color:#dee066;color:#fff; font-size:30px;line-height:100px;text-align:center;">yellow页面</div>' }
const blue = { template: '<div style="background-color:#6680e0;color:#fff; font-size:30px;line-height:100px;text-align:center;">blue页面</div>' }

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]  
});

export const powerRouter =[    
    { path: '/',redirect:'/red', name: 'index',component: Index,hidden:false,
      children: [
        { path: '/red', name: 'red', component: red,},
        { path: '/yellow', name: 'yellow', component: yellow, meta: {role: 'B'}},
        { path: '/blue', name: 'blue', component: blue, meta: {role: 'C'}}
      ]
    }
];