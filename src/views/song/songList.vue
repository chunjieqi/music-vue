<template>

    <div class="songList">
        <!-- 将顶部改为定位，用div顶替原来的位置 -->
        <div class="dingtiboxx"></div>
        <!-- {{store.state.song.songlist}} -->
        <div class="top" :style="{ background: `url(${store.sugsonglistmessge.picUrl})` }">
            <div class="boxxx">
                <div class="boxone">
                    <div class="fenhui" @click="backed">
                        <van-icon name="arrow-left" />&nbsp;&nbsp;歌单
                    </div>
                    <van-icon name="search" class="searchhh" />

                </div>
                <div class="box">
                    <img :src="store.sugsonglistmessge.picUrl" alt="" class="imgg">
                    <div class="tit">{{ store.sugsonglistmessge.name }}</div>
                    <div class="count">
                        <van-icon name="play-circle-o" />{{ store.sugsonglistmessge.playCount }}
                    </div>
                    <van-icon name="upgrade" class="jiantou" />
                </div>
            </div>

            <!-- {{ store.sugsonglistmessge }} -->
        </div>
        <!-- {{ store.songList }} -->
        <div class="cont">
            <div class="mus" v-for="(item, index) in store.songList" :key="index" @click="select(item)">
                <span class="num">{{ index + 1 }}</span>
                <span class="nam">{{ item.name }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineComponent, reactive, toRefs } from 'vue'
import { songStore } from '@/store/song'
import router from '@/router';
const store = songStore()
// import store from '@/store'
function select(val) {
    store.playsong(val.id, val.name, val.al.picUrl)
    // console.log(val);
    // 这里要用计时器，因为添加时因为是异步的，要比播放函数慢导致顺序乱了，会出bug，用计时器是个很棒的办法
    // setTimeout(function () {
    //     store.playMusic()
    //     console.log(2);
    // }, 1000)
}
function backed() {
    router.back()
}
</script>
<style lang='scss' scoped>
.songList {
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: white;
}




.cont {
    width: 100%;
}

.mus {
    display: flex;
    // flex-wrap: wrap;
    width: 100%;
    height: 50px;
    // background-color: aquamarine;
    margin-bottom: 10px;
    align-items: center;
}

.num {
    margin-left: 20px;
    margin-right: 20px;
}

.top::before {
    content: '';
    position: absolute;
    background: inherit;
    filter: blur(10px);
    // background-color: rgba(0,0,0,0.8);
    // filter: blur(10px);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
}

.top::after {
    content: '';
    position: absolute;
    // background: inherit;
    // filter: blur(20px);
    background-color: rgba(0, 0, 0, 0.5);
    // filter: blur(10px);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
}

.dingtiboxx {
    width: 100%;
    height: 30%;
    display: flex;
    margin-bottom: 20px;
    position: relative;
    z-index: -2;
}

.top {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #161824;
    color: rgb(255, 255, 255);
    margin-bottom: 20px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;

    .box {
        width: 100%;
        height: 60%;
        // background-color: aqua;
        display: flex;
        position: relative;
        // justify-content: space-around;
        align-items: center;
        margin-top: 40px;

        .imgg {
            height: 120px;
            width: 120px;
            // background-color: red;
            border-radius: 15px;
            margin-left: 20px;
        }

        .tit {
            width: 150px;
            height: 80%;
            white-space: pre-wrap;
            margin-left: 20px;
            color: white;
        }

        .count {
            position: absolute;
            right: 240px;
            top: 5px;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 25px;
            width: auto;
            padding: 2px 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            text-align: center;
        }

        .jiantou {
            position: absolute;
            right: 20px;
            top: 15px;
            font-size: 150%;
        }
    }
}

.boxone {
    display: flex;
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0;
    justify-content: space-between;
    font-size: 120%;
    padding-top: 5px;

    .searchhh {
        font-size: 140%;
        margin-right: 5px;
    }


}

.boxxx {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    right: 0;
    z-index: 5;
    filter: blur(0px);
}
</style>