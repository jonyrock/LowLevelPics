
<!--
TODO:

* add CPU label
* add just arrow



-->

<template>
  <svg width="500" height="300">
    <g transform="translate(10,10)">
      <block width="190" height="185" x="0" y="0">
        <text x="95" y="20" text-anchor="middle"> CPU </text>
        <block width="180" height="70" x="5" y="30" label="Control Unit" />
        <block width="180" height="70" x="5" y="105" label="ALU" />
      </block>
      <block width="180" height="70" x="300" y="40" label="Memory" />
      <dearrow x1="190" y1="75" x2="300" y2="75" />
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
  picName: 'Von Neumann Architecture - 1'
}
</script>

<style lang='scss' scoped>
</style>
