<!-- 此路由组件指向整个含tabbar的页面，tabbar路由都是它的子路由 -->
<template>
   <div class="box">
      <navBar></navBar>
      <router-view></router-view>
      <BottomAudio></BottomAudio>
      <footBar></footBar>
   </div>

</template>
<script setup>
import { defineComponent, reactive, toRefs, watch,ref ,onMounted} from 'vue'
import footBar from '@/components/home/footBar.vue'
import navBar from '@/components/navBar/navBar.vue'
import BottomAudio from '@/components/home/bottonaudio.vue'
import {songStore} from '@/store/song'
const store=songStore()
//测试接口  结果：接口可用，成功
// import {getMusiclist} from '@/utils/api/api'
// getMusiclist().then(res=>{
//    console.log(res);
// })

</script>
<style lang='scss' scoped>
.box {
   width: 100%;
   height: 100%;
   overflow: auto;
   padding-bottom: 100px;
}
</style>