<template>
	<nav class="navbar navbar-light bg-warning position-fixed w-100" style="height:40px;box-shadow:0 1px 5px #888888;top:0; z-index: 1;">
		<button id="menuBtn" class="btn-sm  btn-outline-secondary border-0 d-md-none d-lg-none" type="button" data-toggle="collapse" data-target="#menu" aria-expanded="false" aria-controls="menu">
	    	<span class="iconfont" style="font-size: 20px;">&#xe62d;</span>
	 	</button>
		<div class="">
			<a class="navbar-brand text-white" href="#">综合智能监护系统</a>
		</div>
	  	<div class="float-right">
			<img style="width:25px;height:25px;" class="rounded-circle" src="static/img/bg.png" />
			<div id="userName" style="line-height:25px;" class="float-right d-none d-sm-block ml-1" >
				{{user}}
			</div>
	  	</div>
	</nav>
</template>
<script>
import axios from 'axios'
	export default{
		data(){
			return {
				user:'he'
			}
		},
		//专门用来发送ajax的方法
		created(){
			/*axios.get('../src/mock/users.json')
			  .then(function (response) {
			    console.log(response);
			  })
			  .catch(function (response) {
			    console.log(response);
			  });*/
		},
		method:{
			
		}
	}
</script>