<template>
    <div class="songListShow">
        <div class="tite">播放列表</div>
        <div v-if="store.nowsong[0].url === ''" class="wugequ">还没有选择歌曲嗷</div>
        <div v-else>
            <div class="box" v-for="(item, index) in store.nowsong" :key="index" @click="bofang(index)">
                <span class="suoyin">{{ index + 1 }}</span>
                <span class="namee">{{ item.songname }}</span>
                <div class="ststebox">
                    <van-icon v-if="store.index === index" name="pause-circle-o" class="bofang redd" />
                    <van-icon v-else name="play-circle-o" class="bofang" />
                    <van-icon name="close" @click.stop="deletesong(index)" />
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
//删除
function deletesong(val){
    store.deleteSonglist(val)
}
</script>
<style lang='scss' scoped>
.tite{
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;

}
.wugequ{
    margin-left: 20px;
    font-size: 120%;
    color: red;
}
.box {
    width: 100%;
    position: relative;
    height: 50px;
    // background-color: aqua;
    display: flex;
    justify-content: left;
    align-items: center;
    margin-bottom: 20px;

    .suoyin {
        margin-right: 20px;
        margin-left: 20px;
    }
    .ststebox{
        position: absolute;
        right: 40px;
        font-size: 120%;
        .bofang{
            position: absolute;
            right: 50px;
            // color:red
        }
    }
}
.redd{
    color: red;
}
.namee{
    width: 180px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis
}
</style>