<template>

	<div id="Main">

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

</template>

<script>

	export default {
		name: "Main",

		data(){
			return {
					routes : [],
			}
		},

		methods: {

		}
	}

</script>

<style>
	

</style>
