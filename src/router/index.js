import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import HomePage from '@/views/HomePage'
import MoreData from '@/views/MoreData'
import CaseList from '@/views/CaseList'
import Video from '@/views/Video'
import Comment from '@/views/Comment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        // 主页
        {
          path:'',
          name:'HomePage',
          component:HomePage
        },
        // 案列
        {
          path:'/CaseList',
          name:'CaseList',
          component:CaseList
        },
        // 视频
        {
          path:'/Video',
          name:'Video',
          component:Video
        }
      ]
    },
    // 更多资料页面
    {
      path:'/MoreData',
      name:'MoreData',
      component:MoreData
    },
    // 评论页面
    {
      path:'/Comment',
      name:'Comment',
      component:Comment
    }
  ]
})
