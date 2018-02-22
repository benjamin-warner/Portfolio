<template>

	<div id="home" class="home-container">
		<div class="profile-info">
			<img class="profile-image" src="../assets/derp.jpg" alt="Photo of Ben" align="left" />
				Benjamin Warner<br>
				Github : <a href="https://www.github.com/benjamin-warner">Github</a>
		</div>
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
	width: 100%;
	margin-top: 150px;
}

@media screen and (max-width: 400px){
	.profile-info{
	  width: 200px;
	  margin-right: auto;
	  margin-left: auto;
	}
}

@media screen and (min-width: 401px){
	.profile-info{
	  width: 400px;
	  margin-left: auto;
	  margin-right: auto;
	}
}

.profile-image{
	width: 200px;
	height: 200px;
	border-radius: 50%;
}

</style>
