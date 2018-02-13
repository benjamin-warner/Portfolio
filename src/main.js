// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	router: Router,
	template: `
		<div id="main">

	    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
	      <router-link to="/" class="navbar-brand">Home</router-link>
	     
	      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
	        <ul class="navbar-nav mr-auto">
	          <li class="nav-item active">
	            <router-link to="/journal" class="nav-link">Journal</router-link>
	          </li>
	        </ul>
	      </div>

	    </nav>
			<router-view></router-view>
		</div>
	`,
}).$mount('#portfolio')
