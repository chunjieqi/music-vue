<!-- 此路由组件指向整个含tabbar的页面，tabbar路由都是它的子路由 -->
<template>
   <router-view></router-view>
   <footBar></footBar>
</template>

<script setup>
import { defineComponent, reactive, toRefs } from 'vue'
import footBar from '@/components/home/footBar.vue'
</script>
<style lang='scss' scoped>
</style>