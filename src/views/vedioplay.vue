<template>
   <div class="vedioplay">
     <div class="boxone">
       <div class="fenhui" @click="backed">
         <van-icon name="arrow-left" />&nbsp;&nbsp;视频
       </div>
       <van-icon name="search" class="searchhh" />
     </div>
       <video ref="vide" controls crossorigin class="ved" autoplay loop>
         <!-- 视频文件 -->
         <source :src="vstore.vediolist.url">
       </video>

   </div>
</template>

<script setup>
import {defineComponent, onMounted, reactive, toRefs,ref} from 'vue'
import {vediostore} from "@/store/vedio";
import router from "@/router";
const vstore=vediostore()
function backed() {
  router.back()
}
let vide=ref(null)
onMounted(()=>{
  // console.log(vstore.vediolist)
  vide.value.src=''
  setTimeout(()=>{
    console.log(vstore.vediolist)
    vide.value.src=vstore.vediolist.url
  },1000)
})

</script>
<style lang='scss' scoped>
.vedioplay{
  width: 100%;
  height: 100%;
    .ved{
      margin-top: 30px;
      width: 100%;
      height: 50%;
      //object-fit: fill;/*这里是关键*/
    }
}
.boxone {
  display: flex;
  width: 100%;
  position: absolute;
  left: 0;
  top: 10px;
  justify-content: space-between;
  font-size: 120%;
  padding-top: 5px;
  color: black;
  z-index: 5;

  .searchhh {
    font-size: 140%;
    margin-right: 5px;
  }


}
</style>