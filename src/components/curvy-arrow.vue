<template>
  <g>
    <defs>
      <marker id="carrow-end" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto-start-reverse" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" />
      </marker>
    </defs>
    <path
      class="linePath"
      fill="none"
      :d="d"
      stroke-width="2"
      marker-end="url(#carrow-end)"
      stroke-dasharray="5, 5"
    />
  </g>
</template>

<script>
const markerLength = 19;
const d3 = require('d3');
export default {
  props: [
    'x1', 'y1', 'x2', 'y2'
  ],
  computed: {
    d: function() {
      return d3.line()
        .curve(d3.curveCatmullRom)
        .x(d => d[0])
        .y(d => d[1])([
          [+this.x1, +this.y1],
          [+this.x1 + 25, +this.y1 - 3],
          [+this.x2 - 25, +this.y2 + 3],
          [+this.x2, +this.y2]
        ])

    }
  }
}
</script>

<style lang='scss' scoped>
.linePath {
  fill: none;
  stroke: black;
}
</style>
