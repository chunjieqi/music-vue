<template>
    <div class="songListShow">
        <div>播放列表</div>
        <div v-if="store.nowsong[0].url === ''">还没有选择歌曲嗷</div>
        <div v-else>
            <div class="box" v-for="(item, index) in store.nowsong" :key="index" @click="bofang(index)">
                <span class="suoyin">{{ index + 1 }}</span>
                <span>{{ item.songname }}</span>
                <div class="ststebox">
                    <van-icon v-if="store.index === index" name="pause-circle-o" />
                    <van-icon v-else name="play-circle-o" />
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { defineComponent, reactive, toRefs } from 'vue'
import { songStore } from '@/store/song'
const store = songStore()
function bofang(val) {
    store.index = val
    store.audios.src = store.nowsong[store.index].url
    store.isplaying = false
    store.playMusic()
}
</script>
<style lang='scss' scoped>
.box {
    width: 100%;
    position: relative;
    height: 50px;
    background-color: aqua;
    display: flex;
    justify-content: left;
    align-items: center;
    margin-bottom: 20px;

    .suoyin {
        margin-right: 30px;
        margin-left: 10px;
    }
    .ststebox{
        position: absolute;
        right: 20px;
    }
}
</style>