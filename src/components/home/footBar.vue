<!-- 封装装底部tabbar组件 -->
<template>
    <div class="footBar">
        <van-tabbar route  active-color="#ee0a24">
            <van-tabbar-item replace to="/home/find" icon="music-o">发现</van-tabbar-item>
            <van-tabbar-item replace to="/home/boke" icon="fire-o">播客</van-tabbar-item>
            <van-tabbar-item replace to="/home/my" icon="user-o">{{store.user?'我的':'未登录'}}</van-tabbar-item>
            <van-tabbar-item replace to="/home/care" icon="friends-o">关注</van-tabbar-item>
            <van-tabbar-item replace to="/home/cloudVil">
                云村
                <template #icon>
                    <span class="icon-cloud"></span>
                </template>

            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script setup>
import { defineComponent, reactive, toRefs ,ref} from 'vue'
import {userstore} from "@/store/userLogin";
const store=userstore()

</script>
<style lang='scss' scoped>
.box {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
}

.box span {
    width: 100%;
}
</style>
