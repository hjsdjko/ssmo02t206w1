import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import Storeup from '../pages/storeup/list'
import AddrList from '../pages/shop-address/list'
import AddrAdd from '../pages/shop-address/addOrUpdate'
import Order from '../pages/shop-order/list'
import OrderConfirm from '../pages/shop-order/confirm'
import Cart from '../pages/shop-cart/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import pinpaiList from '../pages/pinpai/list'
import pinpaiDetail from '../pages/pinpai/detail'
import pinpaiAdd from '../pages/pinpai/add'
import huiyuanList from '../pages/huiyuan/list'
import huiyuanDetail from '../pages/huiyuan/detail'
import huiyuanAdd from '../pages/huiyuan/add'
import jiadianfenleiList from '../pages/jiadianfenlei/list'
import jiadianfenleiDetail from '../pages/jiadianfenlei/detail'
import jiadianfenleiAdd from '../pages/jiadianfenlei/add'
import jiadianshangchengList from '../pages/jiadianshangcheng/list'
import jiadianshangchengDetail from '../pages/jiadianshangcheng/detail'
import jiadianshangchengAdd from '../pages/jiadianshangcheng/add'
import shenqingweixiuList from '../pages/shenqingweixiu/list'
import shenqingweixiuDetail from '../pages/shenqingweixiu/detail'
import shenqingweixiuAdd from '../pages/shenqingweixiu/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discussjiadianshangchengList from '../pages/discussjiadianshangcheng/list'
import discussjiadianshangchengDetail from '../pages/discussjiadianshangcheng/detail'
import discussjiadianshangchengAdd from '../pages/discussjiadianshangcheng/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'storeup',
					component: Storeup
				},
                {
                    path: 'shop-address/list',
                    component: AddrList
                },
                {
                    path: 'shop-address/addOrUpdate',
                    component: AddrAdd
                },
				{
					path: 'shop-order/order',
					component: Order
				},
				{
					path: 'cart',
					component: Cart
				},
				{
					path: 'shop-order/orderConfirm',
					component: OrderConfirm
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'pinpai',
					component: pinpaiList
				},
				{
					path: 'pinpaiDetail',
					component: pinpaiDetail
				},
				{
					path: 'pinpaiAdd',
					component: pinpaiAdd
				},
				{
					path: 'huiyuan',
					component: huiyuanList
				},
				{
					path: 'huiyuanDetail',
					component: huiyuanDetail
				},
				{
					path: 'huiyuanAdd',
					component: huiyuanAdd
				},
				{
					path: 'jiadianfenlei',
					component: jiadianfenleiList
				},
				{
					path: 'jiadianfenleiDetail',
					component: jiadianfenleiDetail
				},
				{
					path: 'jiadianfenleiAdd',
					component: jiadianfenleiAdd
				},
				{
					path: 'jiadianshangcheng',
					component: jiadianshangchengList
				},
				{
					path: 'jiadianshangchengDetail',
					component: jiadianshangchengDetail
				},
				{
					path: 'jiadianshangchengAdd',
					component: jiadianshangchengAdd
				},
				{
					path: 'shenqingweixiu',
					component: shenqingweixiuList
				},
				{
					path: 'shenqingweixiuDetail',
					component: shenqingweixiuDetail
				},
				{
					path: 'shenqingweixiuAdd',
					component: shenqingweixiuAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discussjiadianshangcheng',
					component: discussjiadianshangchengList
				},
				{
					path: 'discussjiadianshangchengDetail',
					component: discussjiadianshangchengDetail
				},
				{
					path: 'discussjiadianshangchengAdd',
					component: discussjiadianshangchengAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
