<template>

	<div id="Main">

	  <nav class="navbar">
	    <router-link to="/" class="navbar-home">Home</router-link>

			<router-link to="/Journal" class="navbar-link">Journal</router-link>

			<router-link to="/Projects" class="navbar-link">Projects</router-link>
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

	body{
		margin: 0;
	}

	#Main{
		font-family: Arial, Helvetica, sans-serif;
		-webkit-font-smoothing: antialiased;
	}

	.navbar {
		padding: 1%;
		background: #000000;
	}

	.navbar-home {
		font-size: 24pt;
		text-decoration: none;
		color: #c4c4c4;
	}

	.navbar-home:hover{
		color: #ffffff;
	}

	.navbar-link {
		height: auto;
		padding: 1% 1%;
		font-size: 18pt;
		text-decoration: none;
		color: #c4c4c4;
	}

	.navbar-link:hover{
		color: #ffffff;
	}

</style>
