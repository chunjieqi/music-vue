<template>
   <div class="Login">
     <div class="top">
       <van-image
           round
           width="6rem"
           height="6rem"
           :src="avait"
       />
       <div class="name" style="width: 100%;text-align: center;font-size: 250%;margin-top: 10px">{{username}}</div>

     </div>
     <div class="contan">
        <div class="mylist">
            <div class="songg" v-for="(item,index) in usersonglist" :key="index" @click="playsonglist(item)">
              <van-image
                  width="4rem"
                  height="4rem"
                  fit="cover"
                  position="center"
                  :src="item.coverImgUrl"
              />
              <div class="songna">{{item.name}}</div>
            </div>
        </div>
     </div>
     <div class="foot">
       <van-button color="red" @click="outlogin">退出登录</van-button>
     </div>
   </div>
</template>

<script setup>
import {defineComponent, onMounted, reactive, ref, toRefs} from 'vue'
import {getUserdet, getUser, getUserlist, getSonglist} from "@/utils/api/api";
import {userstore} from "@/store/userLogin";
import {songStore} from "@/store/song";
import router from "@/router";
const store=songStore()
const ustore=userstore()
//获取用户详情
let avait=ref('')    //头像
let username=ref('昵称')   //名字
// console.log(222)
function getuidd(){
  if(ustore.uid!==null){
    getUserdet(parseInt(ustore.uid+'')).then(res=>{
      // console.log(res)
      avait.value=res.profile.avatarUrl
      username.value=res.profile.nickname
    })
    // getUser().then(res=>{
    //   console.log(res)
    //
    // })
  }
}
//获取瀛湖歌单
let usersonglist=ref([])
function getsonglist(){
  getUserlist(ustore.uid).then(res=>{
    // console.log(res)
    usersonglist.value=res.playlist
  })
}
//播放歌曲
function  playsonglist(item){
  // console.log(item)
  //根据id获取歌单数组
  getSonglist(item.id).then(res => {
    item.picUrl=item.coverImgUrl
    store.sugsonglistmessge = item //将歌单详情传入store
    store.addlist(res.songs)  //改变歌单列表的值
    router.push('/songlist')   //跳转到歌单页面
  })
}
function outlogin(){
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('uid')
  ustore.user=null
  ustore.uid=null
}
onMounted(()=>{
  // console.log('111')
  getuidd()
  getsonglist()
})
</script>
<style lang='scss' scoped>
.Login{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  background-color: #C0C4CC;
  .top{
      display: flex;
      width: 100%;
      height: 200px;
      //background-color: #909399;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
    
  }
  .contan{
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    //background-color: #909399;
    .mylist{
      width: 100%;
      height: 80%;
      background-color: white;
      overflow: scroll;
      .songg{
        width: 100%;
        height: 40%;
        margin-bottom: 20px;
        display: flex;
        justify-content: left;
        align-items: center;
        background-color: #F2F6FC;
        padding-left: 10px;
        .songna{
          font-size: 120%;
          width: 230px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin-left: 20px;
        }
      }
    }
  }
  .foot{
    width: 100%;
    height: 200px;
    //background-color: #909399;
    display: flex;
    justify-content: center;

  }
}
</style>
