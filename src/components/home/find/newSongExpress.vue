<template>
   <div class="newSongExpress">
        <div class="top">
          <span class="left">
            <van-icon @click="replayy" name="replay" class="replay" />
            {{callname}}
          </span>
          <span class="right">
            <van-button  type="primary" round class="but1" size="mini" >
              <span class="icon icon-play3"></span>
              <span class="ziti">播放</span>

            </van-button>
          </span>
        </div>
        <div class="contan">
          <van-swipe :show-indicators="false">
            <van-swipe-item  v-for="(item,index) in arrres" :key="index">
              <div class="songs" @click="playsong(item2)" v-for="(item2,index) in item" :key="index">
                <van-image
                    class="pic"
                    width="40px"
                    height="40px"
                    fit="cover"
                    :src="item2.album.picUrl"
                />
                <span class="naname">{{item2.name}}</span>
                <van-icon class="mvplay" @click.stop="playmv(item2)" name="play-circle-o" />
              </div>

            </van-swipe-item>
          </van-swipe>
        </div>

   </div>
</template>

<script setup>
import {defineComponent, onMounted, reactive, ref, toRefs} from 'vue'
import {getNewsongs} from "@/utils/api/api";
import {songStore} from "@/store/song";
const sStore=songStore()
let arrres=ref([])
let arrresone=ref([])
let arrrestwo=ref([])
let arrresthree=ref([])
let arrresfore=ref([])
//淑新韩淑
function replayy(){
  getNew()
}
let callname=ref('精选音乐')
let nanan=['精选音乐','不可错过的华语音乐','不可错过的欧美金曲','值得一听的日语音乐','韩国潮流音乐']
function getNew(){
  const xarr=[0,7,96,8,16]
  const xx=parseInt(Math.random()*5)
  callname.value=nanan[xx]
  // console.log(xx)
  getNewsongs(xarr[xx]).then(res=>{
    console.log(res)
    // arrres.value=res.data.slice(0,12)  //取前12首歌,并拆分
    // console.log(arrres.value)
    arrresone.value=res.data.slice(0,3)
    arrrestwo.value=res.data.slice(3,6)
    arrresthree.value=res.data.slice(6,9)
    arrresfore.value=res.data.slice(9,12)
    arrres.value=[arrresone.value,arrrestwo.value,arrresthree.value,arrresfore.value]
    console.log(arrres.value)
  })
}
//播放mv，待开发
function playmv(item2){

}
//播放歌曲
function playsong(item2){
  console.log(item2)
  sStore.playsong(item2.id,item2.name,item2.album.picUrl)
}
onMounted(()=>{
  getNew()
})
</script>
<style lang='scss' scoped>
.newSongExpress{
  width: 100%;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  //background-color: #449fdb;
  background-color: #909399;
  .top{
    width: 96%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    //background-color: #555555;
    .left{
        width: 260px;
      font-size: 120%;
      .replay{
        margin-right: 3px;
        //margin-top: 5px;
      }

    }
    .right{
      width: 100px;
      display: flex;
      justify-content: right;
      //margin-right: 20px;
        .but1{
          //margin-right: 0;
          width: 50px;
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 25px;
          //color: white;
          margin-right: 10px;
          .icon-play3{
            color: white;
          }
          .ziti{
            color: white;
          }

        }
    }

  }
  .contan{
    width: 96%;
    height: 140px;
    //background-color: red;
    .songs{
      width: 100%;
      height: 50px;
      display: flex;
      position: relative;
      justify-content: space-between;
      align-items: center;
      //background-color: green;
      .naname{
        position: absolute;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 240px;
        left: 60px;
      }
      .mvplay{
        margin-right: 10px;
        font-size: 120%;
      }
    }

  }
}
</style>