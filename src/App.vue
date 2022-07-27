<template>
  <router-view />
</template>
<script setup>
import { songStore } from '@/store/song'
import { userstore } from '@/store/userLogin'
const ustore=userstore()
const store = songStore()
function watchEnd() {
  store.playEnd()
  store.changeProgress()
}
watchEnd()
</script>
<style lang="scss">
</style>
