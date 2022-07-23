<template>
  <router-view />
</template>
<script setup>
import { songStore } from '@/store/song'
const store = songStore()
function watchEnd() {
  store.playEnd()
  store.changeProgress()
}
watchEnd()
</script>
<style lang="scss">
</style>
