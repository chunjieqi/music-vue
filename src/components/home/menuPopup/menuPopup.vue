<template>
   <div class="menuPopup">
        <islogined v-if="ustore.user!==null"></islogined>
        <nologin v-else></nologin>
   </div>
</template>

<script setup>
import { defineComponent, reactive, toRefs } from 'vue'
import islogined from "@/components/home/menuPopup/islogined"
import nologin from "@/components/home/menuPopup/nologin"
import {userstore} from "@/store/userLogin";
const ustore=userstore()
</script>
<style lang='scss' scoped>
.menuPopup{
  width: 100%;
  height: 100%;
  background-color: #e7e7e7;
}
</style>