<template>
   <div class="Bokebang">
     <div class="bigbox">
       <div @click="quwanggedan(item)" class="smallbox" v-for="(item,index) in arrBang"   :key="index">
         <div class="top">
           <span class="left">{{item.name}}</span>
           <span class="right">{{item.updateFrequency}}</span>
         </div>
         <div class="contain">
           <van-image
               round
               class="left"
               fit="cover"
               :src="item.coverImgUrl"
           />
           <div class="right">
             <div class="songs" v-for="(item2,index2) in item.songName">
               <span class="lef">{{index2+1}}</span>
               <span class="righ">{{item2}}</span>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
</template>

<script setup>
import {defineComponent, onMounted, reactive, ref, toRefs} from 'vue'
import {getbokebang,getSonglist} from "@/utils/api/api";
import router from "@/router";
import {songStore} from "@/store/song";
const store=songStore()
//获取排行榜数据
let arrBang=ref([])
function  getbang(){
  getbokebang().then(res=>{
    // console.log(res)
    arrBang.value=res.list.splice(0,6)
    // console.log(arrBang.value)

  })
}
//获取榜单里面的前三首歌
function getfristsong(){
  // console.log(1)
  setTimeout(()=>{
    arrBang.value.forEach(function (item){
      // console.log(item)
      getSonglist(item.id).then(res=>{
        // console.log(res)
        item.songName=[res.songs[0].name,res.songs[1].name,res.songs[2].name,]
        // console.log(item)
      })
    })
    // console.log(arrBang.value)
  },1000)
  // console.log(1)
}
//点击去往歌单页面
function quwanggedan(item){
  // console.log(item)
  getSonglist(item.id).then(res => {
    // console.log(item);
    // store.commit('song/getSonglist',res.songs)
    // store.songList=res.songs
    store.sugsonglistmessge = item //将歌单详情传入store
    store.addlist(res.songs)  //改变歌单列表的值
    router.push('/bangSonglist')   //跳转到歌单页面
    // console.log(store.songList);
    // store.playsong(store.songList[0].id,store.songList[0].name)                            //按照歌单播放
  })
}
onMounted(()=>{
  getbang()
  getfristsong()
})
</script>
<style lang='scss' scoped>
.Bokebang{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  .bigbox{
    width: 90%;
    height: 100%;
    margin-top: 20px;
    //background-color: #449fdb;
    .smallbox{
      width: 100%;
      height: 150px;
      display: flex;
      margin-bottom: 10px;
      border-radius: 15px;
      flex-wrap: wrap;
      align-content: center;
      background-color: white;
      .top{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        //background-color: red;
        .left{
          font-size: 140%;
          margin-left: 10px;
        }
        .right{
          font-size: 80%;
          margin-right: 10px;
        }
      }
      .contain{
        width: 100%;
        height: 80px;
        //background-color: yellow;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left{
          width: 80px;
          height: 80px;
          margin-left: 10px;
          border-radius: 10px;
        }
        .right{
          width: 200px;
          height: 80px;
          margin-right: 10px;
          display: flex;
          flex-wrap: wrap;
          align-content: center;
          //background-color: #909399;
          .songs{
            width: 100%;
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: left;
            .lef{
              width: 40px;
              height: 100%;
              display: flex;
              align-items: center;
            }
            .righ{
              width: 160px;
              height: 100%;
              line-height: 25px;
              //display: flex;
              //justify-content: left;
              //align-items: center;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }

        }
      }

    }


  }
}
</style>