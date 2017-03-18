<template>
  <g>
    <arrow :x1="x1" :y1="y1" :x2="x2" :y2="y2" />
    <slot x="10" />
  </g>
</template>

<script>
const markerLength = 19;
export default {
  props: [
    'x1', 'y1', 'x2', 'y2'
  ],
  computed: {
    cx1: function() {
      return +this.x1;
    },
    cy1: function() {
      return +this.y1;
    },
    cx2: function() {
      return +this.x2 - this.ev[0] * markerLength
    },
    cy2: function() {
      return +this.y2 - this.ev[1] * markerLength;
    },
    ev: function () {
      var v = [this.x2 - this.x1, this.y2 - this.y1];
      var l = Math.sqrt(v[0] * v[0] + v[1] * v[1]);
      return [
        v[0] / l, v[1] / l
      ];
    }
  }
}
</script>

<style lang='scss' scoped>
.background {
  fill: none;
  stroke-width: 1;
}
</style>
