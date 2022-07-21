<template>
    <div class="playmusic">
        <div class="top">
            <van-icon name="arrow-down" class="back" @click="back" />
            <h5 class="tite"><span> 歌曲名</span><span>歌手名</span></h5>
            <van-icon name="cluster-o" class="back" />
        </div>
        <div class="contenter">
            <div class="bigbox">
                这里放图片
            </div>
        </div>
        <div class="bottom">

            <div class="opption">
                <van-icon name="like-o" />
                <van-icon name="down" />
                <van-icon name="music-o" />
                <van-icon name="comment-circle-o" />
                <van-icon name="ellipsis" />
            </div>
            <div class="aud">
                <audio src=" https://music.163.com/song/media/outer/url?id=33894312.mp3" controls autoplay loop></audio>
            </div>

        </div>
    </div>
</template>

<script setup>
import router from '@/router'
import { defineComponent, reactive, toRefs } from 'vue'
function back() {
    router.push('/home')
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

.aud {
    width: 200px;
    height: 200px;
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
.aud{
    width: 100%;
    display: flex;
    margin-top: 20px;
    justify-content: center;
}
</style>