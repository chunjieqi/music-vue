<template>
   <div class="islogined">
     <div class="top">
       <van-image
           round
           width="5rem"
           height="5rem"
           :src="avait"
       />
       <div class="name">{{username}}</div>
     </div>
     <div class="conton">
       <van-button type="danger" class="outlogin" @click="outlogin">退出登录</van-button>
     </div>
   </div>
</template>

<script setup>
import {defineComponent, reactive, toRefs, ref, onMounted} from 'vue'
import {userstore} from "@/store/userLogin";
import {getUserdet,getUsermess} from "@/utils/api/api";
import router from "@/router";
const ustore=userstore()
//获取用户信息
//获取用户详情
let avait=ref('')    //头像
let username=ref('昵称')   //名字
function getuser(){
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
function outlogin(){
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('uid')
  ustore.user=null
  ustore.uid=null
  ustore.showpopup=false
}
// function getapimess(){
//   getUsermess().then(res=>{
//     console.log(res)
//   })
// }
onMounted(()=>{
  getuser()
  // getapimess()
})
</script>
<style lang='scss' scoped>
.islogined{
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  background-color: #C0C4CC;
  .top{
    position: absolute;
    width: 100%;
    height: 200px;
    background-color: #F56C6C;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    .name{
      width: 100%;
      text-align: center;
      font-size: 150%;
      margin-top: 20px;
    }
  }
  .conton{
    width: 100%;
    //height: 100px;
    display: flex;
    justify-content: center;
    margin-top: 250px;
  }
}
</style>