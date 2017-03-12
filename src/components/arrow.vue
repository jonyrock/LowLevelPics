<template>

  <g>
    <line>
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#f00" />
        </marker>
      </defs>
    </line>
  </g>

</template>

<script>
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
