<template>
	<div class="counter">
		<div class="m_title">
			<span>{{activecc.value}}</span>
		</div>
		<span>当月电话服务量: {{phoneCallIn+phoneCallout}} 在线服务量: {{chatCount}} IVR服务量: {{IVRCount}} 当月服务总量: {{IVRCount + phoneCallout+phoneCallIn +chatCount}}</span>
	</div>
	
</template>
<style scoped>
	.counter span{
		font-size: 18px;
		font-weight: 700
	}
	.counter{
		text-align: center;
	}
</style>
<script>
	export default {
		//电话服务量（呼入+呼出）+在线服务量 + IVR自助
		props: {
			phoneCallIn: {
				type: Number,
				required: true
			},
			phoneCallout: {
				type: Number,
				required: true
			},
			IVRCount: {
				type: Number,
				required: true
			},
			chatCount: {
				type: Number,
				required: true
			},
			activecc: {
				type: Object,
				required: true
			}
		},
		computed: {
			counter() {
				return this.count
			}
		}
	}
</script>
