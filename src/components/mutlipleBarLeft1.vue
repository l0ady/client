<template>
	<div class="column">
		<div class="main" :id="this.dbData.key"></div>
	</div>
</template>


<script>
import echarts from 'echarts'
export default {
	props: {
		dbData: {
			type: Object,
			required: true
		},
		xAxisdate:{
			type: Array,
			required: true
		}
	},
	methods: {
	},
	mounted() {
		console.log(...this.dbData.legendData)
	let options = {
	    color: this.dbData.color,
	    title: {
          text: this.dbData.name,
          left: 'left',
          textStyle: {
            color: '#fff'
          }
        },
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'cross'
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '10%',
	        bottom: '3%',
	        containLabel: true
	    },
	    toolbox: {
	        feature: {
	            dataView: {show: true, readOnly: false},
	            restore: {show: true},
	            saveAsImage: {show: true}
	        }
	    },
	    legend: {
	        data: this.dbData.legendData
	    },
	    xAxis: [
	        {
	            type: 'category',
	            axisTick: {
	                alignWithLabel: true
	            },
	            data: this.xAxisdate//X轴日期
	        }
	    ],
	    yAxis: [
	        {
	            type: 'value',
	            name: this.dbData.legendData[0],
	            min: 0,
	            max: 500,
	            position: 'right',
	            axisLine: {
	                lineStyle: {
	                    color: this.dbData.color[0]
	                }
	            }
	        },
	        {
	            type: 'value',
	            name: this.dbData.legendData[1],
	            min: 0,
	            max: 500,
	            position: 'left',
	            axisLine: {
	                lineStyle: {
	                    color: this.dbData.color[2]
	                }
	            }
	        }
	    ],
	    series: [
	        {
	            name: this.dbData.legendData[0],
	            type:'bar',
	            data: this.dbData.seriesData[0]
	        },
	        {
	            name: this.dbData.legendData[1],
	            type:'bar',
	            yAxisIndex: 1,
	            data: this.dbData.seriesData[1]
	        }
	    ]
	}
	this.myChart = echarts.init(document.getElementById(this.dbData.key));
	this.myChart.setOption(options);
	//this._init()
	}
}
</script>

<style scoped>
.column .main{
	margin-top: 15px;
	height: 210px;
	/*height: 155px;*/
	margin-bottom: 10px;
}
</style>