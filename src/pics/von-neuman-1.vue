<template>
  <svg
    width="500" height="300"
    id="von-neuman-1"
  >
    <g transform="translate(10,10)">
      <block width="190" height="155" x="0" y="0" />
      <block width="180" height="70" x="5" y="5" label="Control Unit" />
      <block width="180" height="70" x="5" y="80" label="CPU" />

      <block width="180" height="70" x="300" y="50" label="Memory" />
    </g>

  </svg>
</template>

<script>
const d3 = require('d3');
export default {
  mounted: function() {
    var svg = d3.select(this.$el);
    var width = +svg.attr('width');
    var height = +svg.attr('height');
  },
  name: 'Von Neumann Architecture - 1'
}
</script>

<style lang='scss'>
#von-neuman-1 {

}
</style>
