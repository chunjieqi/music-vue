<template>
   <div class="CloudVil">
     <van-tabs v-model:active="active" @click-tab="changetab">
       <van-tab   :title="item.name" :name="index" class="tabst"  v-for="(item,index) in vedioList">
         <div @click.stop="playvedio(item2)" class="smallbox" v-for="(item2,index2) in vedios">
           <van-image
               width="10rem"
               height="14rem"
               fit="cover"
               :src="item2.data.coverUrl"
           />
           <div class="tite">{{item2.data.title}}</div>
         </div>
       </van-tab>
     </van-tabs>
   </div>
</template>

<script setup>
import {defineComponent, onMounted, reactive, ref, toRefs} from 'vue'
import {getVedio,getVedioList} from "@/utils/api/api";
import {vediostore} from "@/store/vedio";

import router from "@/router";
const vstore=vediostore()
let active=ref(0)
//获取视频分类
let vedioList=ref([])
function getVe(){
  getVedio().then(res=>{
    // console.log(res)
    vedioList.value=res.data
  })
}
//点击标签时触发
let vedios=ref([])
function changetab(){
  // getVedioList()
  // console.log(vedioList.value[active.value])
  // console.log(item.id)
  getVedioList(vedioList.value[active.value].id).then(res=>{
    // console.log(res)
    vedios.value=res.datas
    // console.log(vedios.value)
  })
}
//去往视频播放
function playvedio(item2){
  if(item2.data.vid!=null){
    console.log(item2)
    vstore.getvedioid(item2.data.vid)
    router.push('/vedioplay')
  }
  else {
    console.log(item2.data.id)
    vstore.getmv(item2.data.id)
    router.push('/vedioplay')
  }

}
getVe()
setTimeout(()=>{
  changetab()
},1000)

</script>
<style lang='scss' scoped>
.CloudVil{
  width: 96%;
  height: 100%;
  margin: auto;
  overflow: auto;
  background-color: white;
  .tabst{
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .smallbox{
    width: 160px;
    //height: auto;
    margin-right: 5px;
    margin-left: 5px;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    overflow: hidden;
    //background-color: #449fdb;
    //background-color: white;
    border: solid 1px gray;
    border-radius: 15px;
    .tite{
      margin-left: 5px;
      margin-right: 5px;
      margin-top: 5px;
      //margin-bottom: 3px;
    }
  }
}
</style>