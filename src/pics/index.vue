<template>
<div>
  <picHolder picName="Von Neumann Architecture - 1">
    <p1/>
  </picHolder>

  <picHolder picName="Von Neumann Architecture - 2">
    <p2/>
  </picHolder>

  <table style="width:500px">
    <tr>
      <td>
        <picHolder picName="Registers - Version 1">
          <p3_1/>
        </picHolder>
      </td>
      <td>
        <picHolder picName="Registers - Version 2">
          <p3_1/>
        </picHolder>
      </td>
    </tr>
  </table>

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
    p3_1: require('./registers/v1'),
    p3_2: require('./registers/v2')
  }

}

</script>

<style lang='scss'>

.monofont {
  font-family:monospace;
  font-size: 15px;
  /*letter-spacing: -2px;*/
}

table,
svg {
  margin: auto;
}

</style>
