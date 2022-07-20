<template>
    <div class="sugSonglist">
        <div class="box">
            <div class="top">
                <span>推荐歌单</span>
                <van-button round size="mini"> 更多
                    <van-icon name="arrow" />
                </van-button>
            </div>
            <div class="songList">
                <van-swipe :loop="false" :width="160" class="fff" :show-indicators="false">
                    <van-swipe-item v-for="(item, index) in suglist" :key="index" class="myswipe">
                        <img :src="item.picUrl" alt="" class="imgg">
                        <div class="tit">{{ item.name }}</div>
                        <div class="count">
                            <van-icon name="play-circle-o" />{{ item.playcount }}
                        </div>
                    </van-swipe-item>

                </van-swipe>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineComponent, reactive, toRefs, ref } from 'vue'
import { getSuglist } from '@/utils/api/api'
let suglist = ref([])
//获取推荐歌单 
function getsuglist() {

    getSuglist().then(res => {
        console.log(res);
        suglist.value = res.recommend
        //对播放量进行处理
        suglist.value.forEach(item => {
            if (item.playcount <= 10000) {
                item.playcount = item.playcount + ''
            }
            else {
                item.playcount = parseInt(item.playcount / 10000) + '万'
            }
        });
    })
}
getsuglist()
</script>
<style lang='scss' scoped>
.sugSonglist {
    display: flex;
    margin: auto;
    width: 100%;
    justify-content: center;
}

.box {
    display: flex;
    width: 90%;
    justify-content: center;
    flex-wrap: wrap;
}

.top {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}

.songList {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
}

.imgg {
    height: 150px;
    width: 150px;
    border-radius: 10%;
}

.tit {
    width: 150px;
}

.fff {
    width: 100%;
}


.myswipe{
    position: relative;
}
.count {
    position: absolute;
    top: 5px;
    right: 20px;
    background-color: rgb(178, 186, 186);
    border-radius: 25px;
    width: auto;
    padding: 2px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
}
</style>