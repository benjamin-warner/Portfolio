<template>

	<div id="home" class="home-container">
		<div class="profile">
			<div class="profile-info">
				<img class="profile-image" src="../assets/profile.jpg" alt="Photo of Ben" align="left" />
				<div class="profile-text">
					Benjamin Warner<br>
					Github : <a href="https://www.github.com/benjamin-warner">Github</a><br>
					Email : benjaminnwarner at gmail dot com
				</div>
			</div>
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
  display: table;
  position: absolute;
  height: 70%;
  width: 100%;
}

.profile{
  display: table-cell;
  vertical-align: middle;
}

@media screen and (max-width: 600px){
	.profile-info{
	  margin-left: auto;
	  margin-right: auto; 
	  width: 400px;
	}
}

@media screen and (min-width: 600px){
	.profile-info{
	  margin-left: auto;
	  margin-right: auto; 
	  width: 600px;
	}
}

.profile-text{
	width: 300px;
	height: 300px;
	margin: auto;
}

.profile-image{
	width: 300px;
	height: 300px;
	border-radius: 50%;
}

</style>
