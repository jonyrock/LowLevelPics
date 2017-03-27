<template>
  <g>
    <defs>
      <marker id="carrow-end-r" markerWidth="10"
        markerHeight="10"
        refX="0"
        refY="3"
        orient="auto"
        markerUnits="strokeWidth"
      >
      <g transform="translate(8,0) scale(-1,1)">
        <path d="M0,0 L0,6 L9,3 z" />
      </g>
      </marker>

      <marker id="carrow-end-l" markerWidth="10"
        markerHeight="10"
        refX="0"
        refY="3"
        orient="auto"
        markerUnits="strokeWidth"
      >
      <!-- <g transform="translate(10,0) scale(-1,1)"> -->
        <path d="M0,0 L0,6 L9,3 z" />
      <!-- </g> -->
      </marker>

    </defs>
    <path
      class="linePath"
      fill="none"
      :d="d"
      :stroke-width="strokeWidth"
      :marker-end="`url(#${marker})`"
      :stroke-dasharray="dashArray"
    />
  </g>
</template>

<script>
const markerLength = 19;
const d3 = require('d3');
export default {
  props: {
    x1: {
      type: Number,
      required: true
    },
    y1: {
      type: Number,
      required: true
    },
    x2: {
      type: Number,
      required: true
    },
    y2: {
      type: Number,
      required: true
    },
    isDashed: {
      type: Boolean,
      default: false
    },
    orientation: {
      type: String,
      default: 'rl'
    },
    strokeWidth: {
      type: Number,
      default: 2
    }
  },
  computed: {
    d: function() {
      var mp = middleOrientationPoints.bind(this)();
      return d3.line()
        .curve(d3.curveCatmullRom)
        .x(d => d[0])
        .y(d => d[1])([
          [this.x1, this.y1],
          mp[0],
          mp[1],
          [this.x2, this.y2]
        ])
    },
    dashArray: function() {
      if(this.isDashed) {
        return '5, 5'
      } else {
        return '0'
      }
    },
    marker: function() {
      return 'carrow-end-' + this.orientation[this.orientation.length-1];
    }
  }
}

function middleOrientationPoints() {

  var l = 12 * this.strokeWidth;
  var s = 2 * this.strokeWidth;
  var m = {
    'rl': [[l, -s], [-l, s]],
    'tr': [[-s, -l], [l, s]],
    'rr': [[l, -s], [l, s]],
  }
  var sm = m[this.orientation];


  if(!sm) {
    throw new Error('Can`t find orientation')
  }
  return [
    [sm[0][0] + this.x1, sm[0][1] + this.y1],
    [sm[1][0] + this.x2, sm[1][1] + this.y2],
  ];
}

</script>

<style lang='scss' scoped>
.linePath {
  fill: none;
  stroke: black;
}
</style>
