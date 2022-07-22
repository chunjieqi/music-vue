<template>
    <div class="playmusic">
        <div class="top">
            <van-icon name="arrow-down" class="back" @click="back" />
            <h5 class="tite"><span> 歌曲名</span><span>歌手名</span></h5>
            <van-icon name="cluster-o" class="back" />
        </div>
        <div class="contenter">
            <div class="bigbox">
                {{ store.nowsong[store.index].songname }}
            </div>
        </div>
        <div class="bottom">

            <div class="opption">
                <van-icon name="like-o" />
                <van-icon name="down" />
                <van-icon name="music-o" />
                <van-icon name="comment-circle-o" />
                <van-icon name="ellipsis" @click="showlist">
                </van-icon>
            </div>
            <div class="aud">
                <!-- <audio ref="audios" :src='store.nowsong[store.index].url' controls></audio> -->
                <button @click="nowPlay">开始播放</button>
                <div class="audbox">
                    <van-icon name="arrow-left" @click="shangyi" class="arror" />
                    <van-icon name="arrow" @click="nextone" class="arror" />
                </div>
            </div>
        </div>
    </div>
    <van-popup v-model:show="shownoelist" position="bottom" :style="{ height: '30%' }">
        <songListShow></songListShow>
    </van-popup>
</template>

<script setup>
import router from '@/router'
import { defineComponent, reactive, toRefs, ref, onMounted } from 'vue'
import { songStore } from '@/store/song'
import songListShow from '@/components/songPlay/songListShow.vue'
const store = songStore()
function back() {
    router.push('/home')
}
// 播放
function nowPlay() {
    store.playMusic()
}
// 播放上一首
function shangyi() {
    store.shangyishou()
}
// 播放下一首
function nextone() {
    store.next()
}
//展示播放歌单列表
let shownoelist = ref(false)
function showlist() {
    shownoelist.value = true
}
</script>
<style lang='scss' scoped>
.top {
    width: 100%;
    height: 50px;
    background-color: aqua;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.back {
    width: 10%;
    background-color: aquamarine;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 200%;
}

.tite {
    display: flex;
    flex-wrap: wrap;
    background-color: red;
    width: 20%;
    height: 100%;
    justify-content: center;
    align-content: center;
    font-size: 100%;
    font-weight: 400;

    .span {
        display: flex;
        width: 100%;
    }
}

.contenter {
    background-color: black;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 100px;
}

.bigbox {
    width: 70%;
    height: 70%;
    border-radius: 50%;
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
}


.bottom {
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
}

.opption {
    width: 80%;
    display: flex;
    justify-content: space-around;
    font-size: 150%;
}

.aud {
    width: 100%;
    display: flex;
    margin-top: 20px;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 150%;

    .audbox {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
}
</style>