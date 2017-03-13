<template>
<div>
  <picHolder picName="Von Neumann Architecture - 1">
    <p1/>
  </picHolder>

  <picHolder picName="Von Neumann Architecture - 2">
    <p2/>
  </picHolder>

  <picHolder picName="Registers">
    <p3/>
  </picHolder>

  <div style="height: 400px"></div>

</div>
</template>

<script>

import Vue from 'vue';

Vue.component('cpuBase', require('./cpu-base'));

export default {
  components: {
    p1: require('./von-neuman-1'),
    p2: require('./von-neuman-2/index'),
    p3: require('./registers/index')
  }

}

</script>

<style lang='scss'>

.monofont {
  font-family:monospace;
  font-size: 15px;
  /*letter-spacing: -2px;*/
}

svg {
  margin: auto;
}

</style>
