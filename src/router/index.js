import Vue from 'vue'
import Router from 'vue-router'
import router from '../router'
import store from '../store'
import {
  getToken
} from '@/utils/auth' // 验权
import {
  Message
} from 'element-ui'
import Index from '@/components/index'
import ForumList from '@/components/forum/forumList'
import ForumDetail from '@/components/forum/forumDetail'
import CommentDetail from '@/components/forum/commentDetail'
import ReleaseForums from '@/components/forum/releaseForums'
import Personal from '@/components/userCenter/personal'
import Login from '@/components/userCenter/login'
import MsgLogin from '@/components/userCenter/msgLogin'
import UserInfo from '@/components/userCenter/userInfo'
import MyForum from '@/components/userCenter/myForum'
import MyCollect from '@/components/userCenter/myCollect'
import Question from '@/components/userCenter/question'
import MyMessage from '@/components/userCenter/myMessage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        loginAuto: true,  // 添加该字段，表示进入这个路由是需要登录的
        // requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/forumList/:type',
      name: 'ForumList',
      component: ForumList,
    },
    {
      path: '/forumDetail/:id',
      name: 'ForumDetail',
      component: ForumDetail
    },
    {
      path: '/commentDetail/:id',
      name: 'CommentDetail',
      component: CommentDetail,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/releaseForums',
      name: 'ReleaseForums',
      component: ReleaseForums,
      meta: {
        requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal,
      meta: {
        loginAuto: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/msgLogin',
      name: 'MsgLogin',
      component: MsgLogin,
    },
    {
      path: '/userInfo/:id',
      name: 'UserInfo',
      component: UserInfo,
    },
    {
      path: '/myForum',
      name: 'MyForum',
      component: MyForum,
    },
    {
      path: '/myCollect',
      name: 'MyCollect',
      component: MyCollect,
    },
    {
      path: '/question',
      name: 'Question',
      component: Question,
    },
    {
      path: '/myMessage',
      name: 'MyMessage',
      component: MyMessage,
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 0)
    })
  }
})
router.beforeEach((to, from, next) => {
  if (to.meta.loginAuto) {  // 判断该路由是否需要登录权限
    if (store.state.user.token != '') {  // 通过vuex state获取当前的token是否存在
      next();
    }else if(getToken() != '') {
      var userInfo = {
        mobile_num: localStorage.getItem('telphone'),
        login_token: getToken()
      }
      store.dispatch('loginwithtoken',userInfo).then(() =>{
        next()
      })
    }
  }else if (to.meta.requireAuth) {
    if (store.state.user.token != '') {  // 通过vuex state获取当前的token是否存在
      console.log("store")
      next();
    }else {
      next({
        path: '/login',
      })
    }
  } else {
    next();
  }
})
