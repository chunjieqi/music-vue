<template>
     <Bokebang></Bokebang>
  <div class="box">
    <span class="foot">到底了~</span>
  </div>

</template>

<script setup>
import { defineComponent, reactive, toRefs } from 'vue'
import Bokebang from '@/components/home/Boke/Bokebang'
</script>
<style lang='scss' scoped>
.box{
  position: relative;
  height: 1px;
}
.foot{
  position: absolute;
  bottom: -40px;
  left: 150px;

}
</style>