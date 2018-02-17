<template>

	<div id="home" class="home-container">
		<h1> {{ title }}</h1>
	</div>

</template>

<script>

export default{
	name: 'Home',
	data(){
		return {
			title: 'Hello home'
		}
	}
}

</script>


<style>

.home-container{
	position: absolute;
	margin-top: 8%;
	top: 0; left: 0; right: 0;
}

</style>
