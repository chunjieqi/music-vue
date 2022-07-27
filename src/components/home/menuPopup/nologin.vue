<template>
   <div class="nologin">
     <div class="top">
       <van-icon class="icon" name="music-o" />
       <div class="tite">请使用网易云音乐账号登录</div>
     </div>
     <div class="contant">
       <van-button  @click="gologin" style="width: 200px" color="linear-gradient(to right, #ff6034, #ee0a24)">
         登录
       </van-button>
     </div>
   </div>
</template>

<script setup>
import { defineComponent, reactive, toRefs } from 'vue'
import {userstore} from "@/store/userLogin";
const ustore=userstore()
import router from "@/router";
function gologin(){
  ustore.showpopup=false
  router.push('/home/my')
}
</script>
<style lang='scss' scoped>
.nologin{
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  .top{
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 30%;
    background-color: #555555;
    .icon{
        width: 100%;
      text-align: center;
      font-size: 400%;
      color: red;
    }
    .tite{
      width: 100%;
      text-align: center;
      font-size: 120%;
      margin-top: 30px;
    }
  }
  .contant{
    position: absolute;
    top: 250px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>