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
                    <van-swipe-item v-for="(item, index) in suglist" :key="index" class="myswipe" @click="goList(item)">
                        <img :src="item.picUrl" alt="" class="imgg">
                        <div class="tit">{{ item.name }}</div>
                        <div class="count">
                            <van-icon name="play-circle-o" />{{ item.playCount }}
                        </div>
                    </van-swipe-item>
                </van-swipe>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineComponent, reactive, toRefs, ref } from 'vue'
import { getSuglist, getSonglist } from '@/utils/api/api'
// import store from '@/store';
//引入pinia store
import { songStore } from '@/store/song'
import router from '@/router'
//创建store实例
const store = songStore()
// console.log(store);
let suglist = ref([])
//获取推荐歌单 
function getsuglist() {
    getSuglist().then(res => {
        // console.log(res);
        suglist.value = res.result
        //对播放量进行处理
        suglist.value.forEach(item => {
            if (item.playCount <= 10000) {
                item.playCount = item.playCount + ''
            }
            else {
                item.playCount = parseInt(item.playCount / 10000) + '万'
            }
        });
    }).catch(err => {
        console.log('网络异常');
    })
}
getsuglist()
// 获取并去往歌单页面
function goList(item) {
    //根据id获取歌单数组
    getSonglist(item.id).then(res => {
        console.log(item);
        // store.commit('song/getSonglist',res.songs)
        // store.songList=res.songs
        store.sugsonglistmessge = item //将歌单详情传入store
        store.addlist(res.songs)  //改变歌单列表的值
        router.push('/songlist')   //跳转到歌单页面
        // console.log(store.songList);
        // store.playsong(store.songList[0].id,store.songList[0].name)                            //按照歌单播放
    })

    // store.commit('song/getSonglist(id)')
}
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


.myswipe {
    position: relative;
}

.count {
    position: absolute;
    top: 5px;
    right: 20px;
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
</style>