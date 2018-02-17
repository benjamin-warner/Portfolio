<template>

	<div id="Projects" class="projects-container">
		<h1> {{ title }}</h1>
	</div>

</template>

<script>

export default{
	name: 'Projects',
	data(){
		return {
			title: 'Hello Projects'
		}
	}
}

</script>


<style>

.projects-container{
	position: absolute;
	margin-top: 8%;
	top: 0; left: 0; right: 0;
}

</style>
