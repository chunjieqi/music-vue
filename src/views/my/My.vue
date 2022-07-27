<template>
   <div class="My">
      <noLogin v-if="ustore.user===null"></noLogin>
      <Login v-else></Login>
   </div>
</template>

<script setup>
import { defineComponent, reactive, toRefs } from 'vue'
import Login from "@/components/login/Login.vue"
import noLogin from "@/components/login/noLogin.vue"
import {userstore} from '@/store/userLogin'
const ustore=userstore()
</script>
<style lang='scss' scoped>
.My{
   width: 100%;
   height: 100%;
   overflow: auto;
}
</style>