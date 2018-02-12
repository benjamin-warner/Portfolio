// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	router: Router,
	template: `
		<div id="app">
			<router-view> </router-view>
		</div>
	`,
}).$mount('#app')
