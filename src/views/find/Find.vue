<template>
   <Swipe class="swipe"></Swipe>
   <cicleIcon class="cicleIcon"></cicleIcon>
   <van-divider />
</template>

<script setup>
import { defineComponent, reactive, toRefs } from 'vue'
import Swipe from '@/components/home/find/swipe.vue'
import cicleIcon from '@/components/home/find/cicleIcon.vue'
</script>
<style lang='scss' scoped>
.swipe{
   margin-top: 20px;
}
.cicleIcon{
   margin-top: 10px;
}

</style>