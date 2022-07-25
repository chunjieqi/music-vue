<template>
    <div class="bottonaudio" ref="audioo" @click="tiaozhuan">
        <div class="piccwai">
            <div v-if="store.isplaying === true" class="piccnei playimg">
                <img class="imgggg" :src="store.nowsong[store.index].picurl" alt="">
            </div>
            <div v-else class="piccnei">
                <img class="imgggg" :src="store.nowsong[store.index].picurl" alt="">
            </div>
        </div>
        <div class="name">{{ store.nowsong[store.index].songname }}</div>
        <div class="start" @click.stop="kaishi">
            <van-circle v-model:current-rate="full" :rate="100" :speed="1" layer-color="#CDD0D6" stroke-width="60" color="#ff0000" size="30px" class="vacxir">

                <span v-if="store.isplaying === false" class="icon-play3 playicon"></span>
                <span v-else class="icon-pause2 playicon"></span>

            </van-circle>
        </div>
        <div class="menulist" @click.stop="showlist">
            <van-icon class="menuicon" name="apps-o" />
        </div>
    </div>
    <van-popup v-model:show="shownoelist" position="bottom" :style="{ height: '30%' }">
        <songListShow></songListShow>
    </van-popup>
</template>

<script setup>
import { defineComponent, reactive, toRefs, computed, ref, watch, onMounted, watchEffect } from 'vue'
import { songStore } from '@/store/song'
import songListShow from '@/components/songPlay/songListShow.vue'
import router from '@/router'
const store = songStore()
const full = computed({
    get() {
        return parseInt(store.widthh)
    },
    set() { }
})
//展示播放歌单列表
let shownoelist = ref(false)
function showlist() {
    shownoelist.value = true
}
//开始与暂停
function kaishi() {
    store.playMusic()
}
//跳转到音乐播放器
function tiaozhuan() {
    router.push('/playmusic')
}
// let idopenaudio=true
let audioo = ref(null)
onMounted(() => {
    watchEffect(() => {
        console.log('监听到了');
        if ( store.nowsong[store.index].url != '') {
            console.log("上升");
            // console.log(audioo.value);
            audioo.value.classList.add('shangsheng');
            // idopenaudio = false
            console.log(audioo.value.classList);
            return
        }
        if ( store.nowsong[store.index].url === '') {
            audioo.value.classList.add('xiajiang');
            // idopenaudio = true
            return
        }
    })
})

</script>
<style lang='scss' scoped>
.bottonaudio {
    transition: all .8s;
    position: fixed;
    display: flex;
    // display: none;
    bottom: -50px;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: white;
    align-items: center;
    margin-top: 0;

    .piccwai {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45px;
        background-color: rgb(0, 0, 0);
        height: 45px;
        border-radius: 50%;
        left: 20px;
        

        .piccnei {
            width: 30px;
            // background-color: burlywood;
            // background-color: rgb(202, 26, 26);
            height: 30px;
            border-radius: 50%;
            overflow: hidden;

            .imgggg {
                width: 100%;
                height: 100%;

            }

            // left: 10px;
        }
    }

    .name {
        position: absolute;
        left: 80px;
        width: 120px;
        height: 25px;
        line-height: 25px;
        // background-color: rgb(19, 103, 75);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }

    .start {
        position: absolute;
        right: 70px;
    }

    .menulist {
        position: absolute;
        right: 15px;

        .menuicon {
            font-size: 200%;
        }
    }
}



.vacxir {
    display: flex;
    justify-content: center;
    align-items: center;
}

.playicon {
    font-size: 15px;
}

// 动画
@keyframes routeimg {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.playimg {
    animation: routeimg 30s infinite linear;
}
.shangsheng{
    bottom: 50px;
}
.xiajiang{
    bottom: -50px;
}
</style>