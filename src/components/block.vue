<template>

  <g :transform='translate'>
    <rect
      class='background'
      :width="width"
      :height="height"
    ></rect>
    <text
      v-if="label" class="label"
      text-anchor="middle"
      :x="width / 2"
      :y="height / 2 + 5"
    > {{label}} </text>
  </g>

</template>

<script>
const d3 = require('d3');
export default {
  props: [
    'width', 'height', 'x', 'y', 'label'
  ],
  computed: {
    translate: function() {
      return `translate(${this.x}, ${this.y})`
    }
  }
}
</script>

<style lang='scss' scoped>
.background {
  fill: none;
  stroke: black;
  stroke-width:1
}
</style>
