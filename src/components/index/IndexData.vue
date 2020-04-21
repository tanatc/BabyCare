<template>
	<div class="row text-white">
		<div id="dataview" v-for="item in items" class="col-md-3 col-sm-4 m-auto p-2" style="height:100px;">
			<div class="h-100 text-center" :class="item.color" style="border-radius: .25rem;1px solid rgba(0, 0, 0, 0.125);">
				<div class="float-left w-50 h-100 font-weight-light">
					<div class="w-100">
						<span class="iconfont h1" v-html="item.icon"></span>
					</div>
					<div class="w-100 " style="font-size: 12px;">
						{{item.title}}
					</div>
				</div>
				<div class="float-left w-50 h-100 font-weight-bold" style="line-height:80px;background:rgba(200,200,200,.25); border-radius: 0 .25rem .25rem 0;">
						{{item.testdata}}
				</div>	
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				items:[
					{icon:'&#xe694;',color:'bg-success',title:'温度(℃)',testdata:'89℃',},
					{icon:'&#xe609;',color:'bg-warning',title:'湿度(%)',testdata:'38.9%',},
					{icon:'&#xe605;',color:'bg-primary',title:'PM2.5颗粒(PCS/283ML)',testdata:'3，064',},
				]
				/*[
					icon:'&#xe694;',
					title:'温度(℃)',
					testdata:'89℃',
				],
				[
					icon:'&#xe694;',
					title:'温度(℃)',
					testdata:'89℃',
				]
				]*/
			}
		}
	}
</script>