<template>

	<div id="home" class="home-container">
		<div class="info-container">
			<p>
				<img class="profile-image" src="../assets/profile.jpg" alt="Photo of Ben" align="left" />
				Benjamin Warner
				Github : <a href="https://www.github.com/benjamin-warner">Github</a><br>
				Email : benjaminnwarner at gmail dot com
			</p>
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

.info-container{
  display: table-cell;
  vertical-align: middle;
}

p{
 	margin-left: auto;
  margin-right: auto;
  width: 80%;
}

.profile-image{
	width: 256px;
	height: 256px;
	border-radius: 50%;
	margin: auto;
}

</style>
