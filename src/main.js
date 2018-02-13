// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from './router'
import Main from './components/Main'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#portfolio',
	router: Router,
	components: { Main },
	template: '<Main/>'
})
