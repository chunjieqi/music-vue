<template>
   <Swipe class="swipe"></Swipe>
   <cicleIcon class="cicleIcon"></cicleIcon>
   <van-divider />
   <sugSongist></sugSongist>
   <button @click="quba">点击去往播放歌曲页面</button>
   <!-- <audio src=""></audio> -->
</template>

<script setup>
import { defineComponent, reactive, toRefs } from 'vue'
import Swipe from '@/components/home/find/swipe.vue'
import cicleIcon from '@/components/home/find/cicleIcon.vue'
import sugSongist from '@/components/home/find/sugSongist.vue'
import router from '@/router'
function quba(){
   router.push('/playmusic')
}
</script>
<style lang='scss' scoped>
.swipe {
   margin-top: 20px;
}

.cicleIcon {
   margin-top: 10px;
}
</style>