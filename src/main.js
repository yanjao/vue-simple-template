import Vue from 'vue'
import App from './App'
import router from './router'
import { powerRouter } from './router';
import store from './store';
import 'normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    if(store.getters.role){ //判断role 是否存在
    	
    	if(store.getters.newrouter.length !== 0){  
       		next();
	    }else{
	    	let newrouter
       		if (store.getters.role == 'A') {  //判断权限
                newrouter = powerRouter
            } else {
                let newchildren = powerRouter[0].children.filter(route => {
                    if(route.meta){
                    	if(route.meta.role == store.getters.role){
                    		return true
                        }
                        return false
                    }else{
                        return true
                    }
                });
                newrouter = powerRouter
                newrouter[0].children = newchildren
            }
            router.addRoutes(newrouter) //添加动态路由
            store.dispatch('Roles',newrouter).then(res => { 
                next({ ...to })
            }).catch(() => {       

            })
	    }	  
    }else{
       	if (['/login'].indexOf(to.path) !== -1) { 
           next()
        } else {
           next('/login')
        }
	}
})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
