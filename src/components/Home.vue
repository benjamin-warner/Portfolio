<template>

	<div id="home" class="home-container">
		<span>
			<img class="profile-image" src="../assets/profile.jpg" alt="Photo of Ben"/>
			Some text.
		</span>
	</div>

</template>

<script>

export default{
	name: 'Home',
	data(){
		return {
		}
	}
}

</script>

<style>

.home-container{
	position: absolute;
	margin-top: 8%;
	padding-left: 2%; padding-right: 2%;
	top: 0; left: 0; right: 0;
}

.profile-image{
	width: 20%;
	height: 20%;
	border-radius: 50%;
}

</style>
