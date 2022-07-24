<template>
    <div class="songList">
        <!-- {{store.state.song.songlist}} -->
        <div class="top"></div>
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
const store = songStore()
// import store from '@/store'
function select(val) {
    store.playsong(val.id, val.name,val.al.picUrl)
    console.log(val);
    // 这里要用计时器，因为添加时因为是异步的，要比播放函数慢导致顺序乱了，会出bug，用计时器是个很棒的办法
    setTimeout(function () {
        store.playMusic()
        console.log(2);
    }, 1000)


}
</script>
<style lang='scss' scoped>
.songList {
    width: 100%;
    height: 100%;
}

.top {
    width: 100%;
    height: 30%;
    background-color: rgb(110, 164, 211);
    margin-bottom: 20px;
}

.count {
    width: 100%;

}

.mus {
    display: flex;
    // flex-wrap: wrap;
    width: 100%;
    height: 50px;
    background-color: aquamarine;
    margin-bottom: 10px;
    align-items: center;
}

.num {
    margin-left: 20px;
    margin-right: 20px;
}
</style>