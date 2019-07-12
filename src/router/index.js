import Vue from 'vue'
import Router from 'vue-router'
import app from '@/components/app'
import home from '@/components/home/home'
import chart from '@/components/chart/chart'
import my from '@/components/my/my'
import wallet from '@/components/wallet/wallet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: app,
      children:[
      	{path: '/app/home', component: home,name: 'home'},
      	{path: '/app/chart', component: chart,name: 'chart'},
      	{path: '/app/my', component: my,name: 'my'},
      	{path: '/app/wallet', component: wallet,name: 'wallet'},
      ],redirect:'/app/home'
    }
  ]
})
/*
 	{
 		path: '/',
    name: 'home',
    component: home,
     children:[
     	{ 
	    	path: '/home/homeRankings', component: homeRankings,name: 'homeRankings',
	    	children:[
	    		{path: '/home/flowTop', component: flowTop,name: 'flowTop'},
	    		{path: '/home/ztcTop', component: ztcTop,name: 'ztcTop'}
	    	],redirect:'/home/flowTop'
    	},
     ]
 	}
 * */