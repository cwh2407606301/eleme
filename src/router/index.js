import Vue from 'vue'
import Router from 'vue-router'
import Mapp from 'components/mapp'
import Goods from 'components/goods/goods'
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'

Vue.use(Router)
 /* eslint-disable */
/*  eslint-disable no-new */
export default new Router({
linkActiveClass: 'active',

routes: [
{
    path: '/',
    name: 'Mapp',
    component: Mapp,
    children:[
    	{
    		path: 'goods',
    		name: 'Goods',
    		component: Goods
    	},
    	{
		    path: '',
		    redirect: '/goods'
		},
		{
    		path: 'ratings',
    		name: 'Ratings',
    		component: Ratings
    	},
    	{
    		path: 'seller',
    		name: 'Seller',
    		component: Seller
    	}
	]
}
]
})
