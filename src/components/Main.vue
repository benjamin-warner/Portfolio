<template>

	<div id="Main" class="root">

	  <nav class="navbar">
  		<span>
		    <router-link to="/" class="navbar-home">Home</router-link>

				<router-link to="/Journal" class="navbar-link">Journal</router-link>

				<router-link to="/Projects" class="navbar-link">Projects</router-link>
			</span>
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

	.navbar {
		position: absolute;
		top: 0; left: 0; right: 0;
		padding: 1%;
		border: 1%;
		background: #000000;
	}
	.navbar-home {
		font-size: 24pt;
	}
	.navbar-link {
		font-size: 24pt;
	}

</style>
