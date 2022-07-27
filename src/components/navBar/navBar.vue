<template>
    <div class="navBar">
        <span class="icon-list iconstyleft" @click="leftMenu"></span>
        <van-search v-model="searchValue" shape="round" class="search" background="#c5bfbf" placeholder="请输入搜索关键词" />
        <span class="icon-mic iconstyrig" @click="songright"></span>
    </div>
    <!-- 菜单按钮弹出层 -->
    <van-popup v-model:show="ustore.showpopup" position="left" :style="{ width:'80%',height:'100%' }" ><menuPopup></menuPopup></van-popup>
</template>

<script setup>
import router from '@/router'
import { defineComponent, reactive, toRefs, ref } from 'vue'
import menuPopup from '@/components/home/menuPopup/menuPopup'
import {userstore} from "@/store/userLogin";
const ustore=userstore()
let searchValue=ref('')
// let showpopup=ref(false)
//点击左侧菜单按钮
function leftMenu(){
    ustore.showpopup=true
    
}
//点击右侧麦克风按钮
function songright(){
    //路由跳转
    router.push('/song')
}
</script>
<style scoped>
.navBar {
    display: flex;
    width: 100%;
    height: 50px;
    /* background-color: aqua; */
    justify-content: space-between;
    align-items: center;
}
.search{
    width: 250px;
}
.iconstyleft{
    font-size: 1.5em;
    margin-left: 0.8em;
}
.iconstyleft:active{
    color: red;
}
.iconstyrig{
    font-size: 1.5em;
    margin-right: 0.8em;
}
.iconstyrig:active{
    color: red;
}
</style>