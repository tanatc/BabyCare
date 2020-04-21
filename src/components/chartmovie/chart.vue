<template>
	<div id="chart" class="col-md-7 col-sm-12 m-auto p-0 h-100">
	</div>
</template>
<script type="text/javascript">
	$(function(){
		var myChart = echarts.init(document.getElementById('chart'));
		var option = {
		    baseOption:{
		    	title: {
		            text: '温湿度关系图',
			        subtext: '本周温湿度',
			        x: 'center',
			        align: 'right'
		        },
		        legend: {
			        data:['温度','湿度'],
			        x: 'left',
			        itemWidth:20,
			        itemHeight:10,
			    },
		        tooltip : {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'cross',
			            animation: false,
			            label: {
			                backgroundColor: '#505765'
			            }
			        }
			    },
			    dataZoom: [
			        {
			            show: false,
			            realtime: true,
			            start: 0,
			            end: 100
			        },
			        {
			            type: 'inside',
			            realtime: true,
			            start: 0,
			            end: 100
			        }
			    ],
		        xAxis: {
		        	type : 'category',
		            /*data.map(function (item) {
		                return item[0];
		            })*/
		        },
		        yAxis: [{
		        	name:'温度(℃)',
		        	axisLabel: {formatter: '{value} °C'},
		            splitLine: {show: false},
		            /*data:[11,12,13,14,15,15,15,15,12,14],*/
		           },
		           {
		            splitLine: {show: false},
		           	name:'湿度(%)',
		           	inverse:true,
		           	nameLocation: 'start',
		        	axisLabel: {formatter: '{value} %'},
		           }
		        ],
		        toolbox: {
		            left: 'right',
		            feature: {
		                dataZoom: {
		                    yAxisIndex: 'none'
		                },
		                restore: {},
		                saveAsImage: {}
		            },
		        },
		        visualMap: [
		        {	
		        	show:false,
		            top: 20,
		            left: 0,
		            pieces: [{
		                gt: 0,
		                lte: 10,
		                color: '#096'
		            }, {
		                gt: 10,
		                lte: 20,
		                color: '#ffde33'
		            }, {
		                gt: 20,
		                lte: 30,
		                color: '#ff9933'
		            }, {
		                gt:30,
		                lte:37,
		                color: '#cc0033'
		            }, {
		                gt: 37,
		                lte: 40,
		                color: '#660099'
		            }, {
		                gt: 40,
		                color: '#7e0023'
		            }],
		            outOfRange: {
		                color: '#999'
		            },
		        },
		        {
		        	seriesIndex:1, //取第二类数据
		        	pieces: [{
		                gt: 0,
		                lte: 50,
		                color: '#096'
		            }],
		            outOfRange: {
		                color: '#999'
		            },
		            show:false,
		        }
		        ],
		        series: [
		        {
		            name: '温度',
		            type: 'line',
		            smooth:.2,
		            data:[[0,0],[3,-10],[10,23],[78,0],[100,90],[111,3]],
		            /*data.map(function (item) {
		                return item[1];
		            }),*/
		            markPoint: {
		                data: [
		                    {type: 'max', name: '最高气温'},
		                    {type: 'min', name: '最低气温'}
		                ],
		                symbolSize:20,
		                symbloBackground:'blue',
		                label:{
		                	show:true,
		                	formatter:'{a}:{c} C°',
		                	color:'	#5B5B5B',
		                	
		                },
		                itemStyle:{
		                	color:'#ffcc00'
		                }
		            },
		            markLine: {
		                silent: true,
		                data: [
		                {
		                	type: 'average', 
		                	name: '平均值',
		                	lineStyle:{color:'#ffcc00'},
		                	symbol:'arrow',
		            		symbolRotate:180,
		                	}
		                ],
		                label:{
		                	position:'middle',
		                	formatter:'平均温度:{c}℃'
		                },
		                symbol:'circle'
		            },
		            areaStyle: {
		                normal: {}
		            },
		            lineStyle: {
		                normal: {
		                    width: 1
		                }
		            },
		        },
		        {
		        	yAxisIndex:1,
		        	name: '湿度',
		            type: 'line',
		            smooth:.2,
		            /*data:[[0,0],[3,-10],[10,23],[78,0],[100,90],[111,3]],*/
		            /*data.map(function (item) {
		                return item[1];
		            }),*/
		            data:[
		                [0,3],[2,14],[23,45],[24,2],[36,3],[38,38],[44,56],[49,2],[56,5],[58,100]
		            ],
		            markPoint: {
		                data: [
		                    {type: 'max', name: '最大湿度'},
		                    {type: 'min', name: '最小湿度'}
		                ],
		                symbolSize:20,
		                label:{
		                	show:true,
		                	formatter:'{a}:{c} %',
		                	color:'	#5B5B5B',
		                	
		                },
		                itemStyle:{
		                	color:'	#EE4000',
		                }
		            },
		            markLine: {
		                silent: true,
		                data: [/*{
		                    yAxis: 0
		                }, {
		                    yAxis: 40
		                },*/
		                {
		                	type: 'average', 
		                	name: '平均值',
		                	lineStyle:{color:'#EE4000'},
		                },
		                ],
		                label:{
		                	position:'middle',
		                	formatter:'平均湿度:{c}%',
		                }
		            },
		            areaStyle: {
		                normal: {}
		            },
		            lineStyle: {
		                normal: {
		                    width: 1
		                }
		            },
		        }],
	
		    },
		    media:[
	    	{
	    		query: {
	    			maxWidth:450,
	    			
	    		},
	    		option: {       // 这里写此规则满足下的option。
	    			legend:{
	    				show:false,
	    			},
	    			title: {
				        x: 'center',
			        },
			        legend: {
				        x: 'right',
				        itemWidth:10,
				        itemHeight:8,
				    },
	                toolbox:{
	                	show:false,
	                },
	                series:[{
	                	/*center:['30%','50%'],
	                	radius:['50%','50%']*/
	                }],
	            },
	    	},
	    	]
	    	
		};
	    myChart.setOption(option);
	    setInterval(myChart.setOption(option), 3000);
		window.addEventListener("resize", function () {
	      myChart.resize();
	    });				
	});
</script>