<template>

  <div id="app">
	<navview></navview>
  	
    <div class="container-fluid">
			<headerview></headerview>
			<!--3个数据-->
			<dataview></dataview>
			<!--1个表-->
			<chartmovieview></chartmovieview>
		</div>
  </div>
</template>

<script>
import headerview from './components/index/IndexHeader.vue'
import dataview from './components/index/IndexData.vue'
import chartmovieview from './components/index/IndexChartMovie.vue'
import navview from './components/navview.vue'
	export default {
	  name: 'app',
	  components:{
	  	headerview,
	  	dataview,
	  	chartmovieview,
	  	navview,
	  }
	}
</script>
