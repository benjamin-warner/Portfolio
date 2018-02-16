<template>

	<div id="Journal" class="journal-container">
		<h1> {{ title }}</h1>
	</div>

</template>

<script>

export default{
	name: 'Journal',
	data(){
		return {
			title: 'Hello Journal'
		}
	}
}

</script>


<style>

.journal-container{
	position: absolute;
	margin-top: 8%;
	top: 0; left: 0; right: 0;
}

</style>
