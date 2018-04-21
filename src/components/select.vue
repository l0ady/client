<template>
	<el-row class="demo-autocomplete">
  <el-col :span="20">
    <!-- <div class="sub-title">选择要监控的服务机构</div> -->
    <el-autocomplete
      class="inline-input"
      v-model="state1"
      :fetch-suggestions="querySearch"
      placeholder="请选择服务机构"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col>
</el-row>
</template>
<script>
  export default {
  	props: {
		activeMap: {
			type: Array,
			required: true
		}
	},
    data() {
      return {
        restaurants: [],
        state1: '',
        state2: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return this.activeMap;
      },
      handleSelect(item) {
        this.$emit('taggle', item)
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>