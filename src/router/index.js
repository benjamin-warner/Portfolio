import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Journal from '@/components/Journal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    
    {
    	path: '/journal',
    	name: "Journal",
    	component: Journal
    }
  ]
})
