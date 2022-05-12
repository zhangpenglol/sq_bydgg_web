import router from './router/index'
import store from './store/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import { constantRoutes } from '@/router'

import Router from 'vue-router'
NProgress.configure({ showSpinner: false })

router.beforeEach(async (to, from, next) => {
	if (to.path === '/login') return next();
	const hasToken = getToken()
	if (hasToken) {
    let menulist= store.state.routes;
    if(menulist.length === 0){
      if (to.path === '/login') {
      }else{
        resetRouter()
        let accessRoutes= await store.dispatch('getRoutes');
        //注入时拼接404处理路由
        router.addRoutes(accessRoutes.concat([{
          path: '*',
          redirect: '/404'
        }]))
        next({ ...to, replace: true })
      }
    }else{
      next()
    }
	}else{
    return next('/login');
  }
})

//清空路由
function resetRouter(){
  const newRouter = new Router({
    mode: 'hash', // 
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,  //引入的公共路由
    base: process.env.BASE_URL,
  });
  router.matcher = newRouter.matcher; // reset router
}

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
