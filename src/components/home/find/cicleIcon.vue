<template>
    <div class="cicleIcon">
        <van-swipe :loop="false" :width="70" :show-indicators="false">
            <van-swipe-item v-for="(item, index) in iconList" :key="index" class="box">
                <div class="smallBox">

                    <img :src=item.iconUrl alt="" class="icons">
                    <!-- <div class="nameIcon">{{ item.name }}</div> -->
                </div>
                <div class="nameIcon">{{ item.name }}</div>
            </van-swipe-item>

        </van-swipe>
    </div>
</template>

<script setup>
import { defineComponent, reactive, toRefs, ref } from 'vue'
import { getFindIconlist } from '@/utils/api/api'
let iconList = ref([])
function getFindIcon() {
    getFindIconlist().then(res => {
        console.log(res);
        iconList.value = res.data
    })
}
getFindIcon()
</script>
<style lang='scss' scoped>
.icons {
    // background-color: red;
    width: 100%;
    height: 100%;
    transform: translateY(-50px);
    // filter: drop-shadow(705px 0 0 rgb(191, 7, 7));
    // filter: drop-shadow(705px 0 0 #ccc);
    // filter: brightness(0);
    // filter: invert(26%) sepia(100%) saturate(7267%) hue-rotate(10deg) brightness(93%) contrast(113%);
    -webkit-filter: drop-shadow(0px 50px red);
    /* Chrome, Safari, Opera */
    filter: drop-shadow(0px 50px red);
}

.box {
    // margin-right: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.smallBox {
    display: flex;
    // position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    // flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    background-color: #f1e0e0;
    // color: yellow;
}

.nameIcon {
    // position: absolute;
    margin-top: 5px;
}

.cicleIcon {}
</style>