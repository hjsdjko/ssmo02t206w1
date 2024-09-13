import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import aboutus from '@/views/modules/aboutus/list'
    import jiadianfenlei from '@/views/modules/jiadianfenlei/list'
    import discussjiadianshangcheng from '@/views/modules/discussjiadianshangcheng/list'
    import huiyuan from '@/views/modules/huiyuan/list'
    import shenqingweixiu from '@/views/modules/shenqingweixiu/list'
    import systemintro from '@/views/modules/systemintro/list'
    import pinpai from '@/views/modules/pinpai/list'
    import messages from '@/views/modules/messages/list'
    import orders from '@/views/modules/orders/list'
    import jiadianshangcheng from '@/views/modules/jiadianshangcheng/list'
    import config from '@/views/modules/config/list'
    import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '家电资讯',
        component: news
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/jiadianfenlei',
        name: '家电分类',
        component: jiadianfenlei
      }
      ,{
	path: '/discussjiadianshangcheng',
        name: '家电商城评论',
        component: discussjiadianshangcheng
      }
      ,{
	path: '/huiyuan',
        name: '会员',
        component: huiyuan
      }
      ,{
	path: '/shenqingweixiu',
        name: '申请维修',
        component: shenqingweixiu
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/pinpai',
        name: '品牌',
        component: pinpai
      }
      ,{
	path: '/messages',
        name: '留言板',
        component: messages
      }
      ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
      ,{
	path: '/jiadianshangcheng',
        name: '家电商城',
        component: jiadianshangcheng
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/newstype',
        name: '家电资讯分类',
        component: newstype
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
