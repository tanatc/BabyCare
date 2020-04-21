<template>
	<div class="row p-2 w-100" style="height:500px;">
		<chart></chart>
		<movie></movie>
	</div>
</template>
<script>
	import chart from '../chartmovie/chart.vue'
	import movie from '../chartmovie/movie.vue'
	
	export default{
		components:{
			chart,
			movie,
		}
	}
</script>
