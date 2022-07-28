<template>
    <Swipe class="swipe"></Swipe>
    <cicleIcon class="cicleIcon"></cicleIcon>
   <van-divider />
   <sugSongist class="sugSong"></sugSongist>
  <newSongExpress class="newSongExpress"></newSongExpress>
  <div class="footer">到底了~</div>
   <!-- 实验： -->
   <!-- {{store.state.song.count}}
   <button @click="fian">+</button> -->
   <!-- <audio src=""></audio> -->
</template>
<script setup>
import { defineComponent, reactive, toRefs } from 'vue'
import Swipe from '@/components/home/find/swipe.vue'
import cicleIcon from '@/components/home/find/cicleIcon.vue'
import sugSongist from '@/components/home/find/sugSongist.vue'
import router from '@/router'
import newSongExpress from "@/components/home/find/newSongExpress"
// import store from '@/store'
// function fian(){
//    console.log(store.state.song.count)
//    console.log(router)
//    store.commit('song/add')
//    // console.log( "fg",store.state.song.count);
   
// }
// console.log(this.$store)
</script>
<style lang='scss' scoped>
.swipe {
   margin-top: 20px;
}

.cicleIcon {
   margin-top: 10px;
}
.sugSong{
  margin-bottom: 30px;
}
.footer{
  width: 100%;
  text-align: center;
  margin-top: 20px;
}
</style>