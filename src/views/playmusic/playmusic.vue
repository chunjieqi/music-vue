<template>
    <div class="playmusic" :style="{ background: `url(${store.nowsong[store.index].picurl})` }">
        <div class="boxxx">
            <div class="top">
                <van-icon name="arrow-down" class="back" @click="back" />
                <h5 ref="tite" class="tite">

                    <span v-if="store.nowsong[store.index].songname.length > 4" class="songname spott">
                        {{ store.nowsong[store.index].songname }}
                    </span>
                    <span v-else class="songname"> {{ store.nowsong[store.index].songname }}</span>

                    <!-- <span v-if="store.nowsong[store.index].songername.length>3" class="wriname spott">歌手名</span> -->
                    <span class="wriname">歌手名</span>
                </h5>
                <van-icon name="cluster-o" class="back" />
            </div>
            <div class="contenter">
                <div class="bigbox playerr" v-if="store.isplaying === true">
                    <img :src="store.nowsong[store.index].picurl" alt="">
                </div>
                <div class="bigbox" v-else>
                    <img :src="store.nowsong[store.index].picurl" alt="">
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
                    <!-- <button @click="nowPlay">开始播放</button> -->
                    <!-- 进度条 -->
                    <div class="pro">
                        <span class="left">{{ store.nowtime }}</span>
                        <Pregress></Pregress>
                        <!-- <van-slider bar-height="4px" v-model="store.audios.currentTime" :min="0" :step="1" :max="store.audios.duration"
                            active-color="#ee0a24" ></van-slider> -->
                        <span class="right">{{ store.alltime }}</span>
                    </div>
                    <div style="width: 100%;"></div>
                    <div class="yinbox">
                        <!-- 切换上一首下一首 -->
                        <div class="audbox">
                            <van-icon name="arrow-left" @click="shangyi" class="arror" />
                            <div class="start" @click="nowPlay">
                                <van-icon v-if="store.isplaying === true" name="pause-circle-o" />
                                <van-icon v-else name="play-circle-o" />
                            </div>
                            <van-icon name="arrow" @click="nextone" class="arror" />
                        </div>

                        <!-- 控制音量 -->
                        <div class="audvim">
                            <van-icon v-if="store.muted === false" name="volume-o" @click="mute" class="vimm" />
                            <van-icon v-else name="service-o" @click="mute" class="vimm" />
                            <van-slider bar-height="4px" v-model="thisf" :min="0" :step="0.1" :max="1"
                                active-color="#ee0a24" @change="chang"></van-slider>
                        </div>
                    </div>
                    <!-- 开始与暂停 -->

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
import Pregress from '@/components/songPlay/progress.vue'
const store = songStore()
//音量
let thisf = ref(0)
thisf.value = store.audios.volume
function chang() {
    console.log(thisf.value);
    store.audios.volume = thisf.value
}
function back() {
    router.back()
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
//静音操作
function mute() {
    if (store.muted === false) {
        store.muted = true
        store.audios.muted = store.muted
    }
    else {
        store.muted = false
        store.audios.muted = store.muted
    }
}
</script>
<style lang='scss' scoped>
.top {
    width: 100%;
    height: 50px;
    // background-color: aqua;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.back {
    width: 10%;
    // background-color: aquamarine;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 200%;
}

.tite {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    // background-color: red;
    width: 20%;
    height: 100%;
    justify-content: center;
    align-content: center;
    font-size: 100%;
    font-weight: 400;
    overflow: hidden;

    .songname {
        // position: absolute;
        top: 10px;
        left: 10px;
        height: 20px;
        white-space: nowrap;
        // justify-content: center;
        // align-items: center;

    }

    .wriname {
        // position: absolute;
        top: 28px;
        height: 20px;
        // margin-top: 28px;
        white-space: nowrap;
        // animation: sport 10s linear infinite;
        // justify-content: center;
        // align-items: center;
        // animation: sport 10s linear infinite;
    }
}

.spott {
    // position: absolute;
    margin-left: 40px;
    animation: sport 10s linear infinite;
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
    margin-top: 60px;
}

.bigbox {
    width: 70%;
    height: 70%;
    border-radius: 50%;
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
    }
}


.bottom {
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
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
    position: relative;

    .audbox {
        width: 100%;
        display: flex;
        justify-content: left;
        margin-top: 20px;
        padding-left: 20px;

        .start {
            font-size: 150%;
        }

        .arror {
            display: flex;
            align-items: center;
        }
    }

    .pro {
        position: relative;
        margin-top: 8px;

        .left {
            position: absolute;
            left: -54px;
            top: -5px;
            font-size: 60%;
        }

        .right {
            position: absolute;
            right: -54px;
            top: -5px;
            font-size: 60%;
        }
    }

    .audvim {
        width: 50%;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 50px;
        position: relative;

        .vimm {
            position: absolute;
            left: -25px;
        }
    }
}

.playerr {
    animation: rout 30s infinite linear;
}

.yinbox {
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
}

@keyframes rout {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }

}

@keyframes sport {
    0% {}


    100% {
        /* 父盒子宽度减去100% */
        transform: translateX(-100%);
    }
}

//背景模糊
.playmusic {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-color: #161824;
    position: relative;
    z-index: 1;
    color: rgb(255, 255, 255);
    // filter: blur(2px);
}

.playmusic::before {
    content: '';
    position: absolute;
    background: inherit;
    filter: blur(20px);
    // background-color: rgba(0,0,0,0.8);
    // filter: blur(10px);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
}

.playmusic::after {
    content: '';
    position: absolute;
    // background: inherit;
    // filter: blur(20px);
    background-color: rgba(0, 0, 0, 0.8);
    // filter: blur(10px);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
}

.boxxx {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    z-index: 5;
    filter: blur(0px);
}
</style>