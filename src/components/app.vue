<template>
  <div>
  	<router-view/>
    <van-tabbar v-model="active" @change="activeFun">
		  <van-tabbar-item to="home">
		  	    <img
			      slot="icon"
			      slot-scope="props"
			      :src="props.active ? icon.active : icon.normal"
			    >
		  </van-tabbar-item>
		  <van-tabbar-item to="wallet"><img src="@/assets/images/home_tab.png"/></van-tabbar-item>
		  <van-tabbar-item to="chart"><img src="@/assets/images/home_tab.png"/></van-tabbar-item>
		  <van-tabbar-item to="my"><img src="@/assets/images/home_tab.png"/></van-tabbar-item>
		</van-tabbar>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
			active:0,
			icon: {
        normal: 'http://page-bucket.oss-cn-beijing.aliyuncs.com/lijunjie/images/geren/Android/drawable-xhdpi/img_my_bg.png',
        active: 'http://page-bucket.oss-cn-beijing.aliyuncs.com/lijunjie/images/geren/Android/drawable-xhdpi/img_my_bg.png'
      }
    }
  },
  created:function(){
  },
  mounted() {
    
  },
  methods:{
		activeFun(e){
//			if(e==0){
//				this.$router.push({
//						path: 'home', 
//						name: 'home'
//				})
//			}else if (e==1){
//				this.$router.push({
//						path: 'wallet', 
//						name: 'wallet'
//				})
//			}else if(e==2){
//				this.$router.push({
//						path: 'chart', 
//						name: 'chart'
//				})
//			}else if(e==3){
//				this.$router.push({
//						path: 'my', 
//						name: 'my'
//				})
//			}
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
