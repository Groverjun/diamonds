import Vue from 'vue'
import Router from 'vue-router'
import app from '@/components/app'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: app
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