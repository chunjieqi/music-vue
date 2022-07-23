<template>
    <div class="Progress">
        <div class="progress-contain" ref="progressCon" @click="changeProgressPosition">
            <div ref="progressBtn" class="progress">
                <van-icon ref="ico" name="like" class="daman" @touchmove="tragmove"
                    @touchend="tragleave" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineComponent, reactive, toRefs, ref, watch, watchEffect, onMounted } from 'vue'
import { songStore } from '@/store/song'
const store = songStore()
const progressBtn = ref(null)
const progressCon = ref(null)
const ico = ref(null)
//点击改变进度条
function changeProgressPosition(e) {
    const width = progressCon.value.clientWidth   //获取进度条宽度
    const clickX = e.offsetX        //获取偏移宽度
    const duration = store.audios.duration
    store.audios.currentTime = (clickX / width) * duration
}
//拖动实现
//触摸移动
let nowwidth = ref(0)      //保存此函数里的值在下个函数里用
function tragmove(e) {
    const musicWidth = progressCon.value.clientWidth
    let clickX = e.changedTouches[0].pageX - 56      //计算相对于底框左侧的偏移量
    if (clickX >= 250) {                                    //限制偏移量的取值
        clickX = 250
    }
    else if (clickX <= 0) {
        clickX = 0
    }
    const duration = store.audios.duration
    const nowwi = (clickX / musicWidth) * 100
    nowwidth.value = (clickX / musicWidth)
    progressBtn.value.style.width = `${nowwi}%`
    store.audios.pause()
    store.isplaying = false;
}
//拖曳结束时调用，更改当前时间并开始播放
function tragleave(e) {
    // console.log('结束');
    store.audios.currentTime = nowwidth.value * store.audios.duration
    store.audios.play()
    store.isplaying = true;
}
// console.log(progressBtn);
onMounted(() => {
    watchEffect(() => {
        progressBtn.value.style.width = store.widthh
    })
})

</script>
<style lang='scss' scoped>
.Progress {
    width: 100%;
}

.progress-contain {
    width: 250px;
    position: relative;
    height: 5px;
    background-color: white;
    border-radius: 15px;

}

.progress {
    width: 0%;
    height: 100%;
    border-radius: 15px;
    background-color: red;
    transition: all 0.1s linear;
    position: relative;
}

.daman {
    position: absolute;
    right: -10px;
    top: -8px;
    color: red;
}
</style>