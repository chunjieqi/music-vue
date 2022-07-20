<template>
    <div class="swipe">
        <van-swipe :autoplay="3000" lazy-render class="swi">
            <van-swipe-item v-for="(item, index) in bandata" :key="index">
                <img class="swi" :src="item.pic" style="width: 100%;height: 100%;" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script setup>
import { defineComponent, reactive, toRefs, ref } from 'vue'
import { getSwipelist } from "@/utils/api/api"
let bandata = ref([])
function getBanner() {
    getSwipelist().then(res => {
        console.log(res);
        bandata.value = res.banners
    })
}
getBanner()
</script>
<style lang='scss' scoped>
.swipe {
    width: 350px;
    margin: auto;
    // margin-top: 20px;
}

.swi {
    border-radius: 10px;
}
</style>