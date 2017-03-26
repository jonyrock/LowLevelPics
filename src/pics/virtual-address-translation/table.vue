<template>
  <block width="100" :height="height" :x="x" :y="y">
    <line
      v-for="col in ccols"
      x1="0" x2="100"
      :y1="col.y" :y2="col.y"
    />
    <arrow
      :x1="110"
      :x2="110"
      :y1="height"
      :y2="shiftY2"
    />
  </block>
</template>

<script>

const _ = require('lodash');

export default {
  props: {
    cols: {
      type: Number,
      required: true
    },
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    },
    shift: {
      type: Number,
      default: 0
    }
  },
  components: { },
  computed: {
    height: function() {
      return this.cols * 10;
    },
    ccols: function() {
      return _.map(Array(this.cols - 1), (e,i) => ({
        y: (i + 1) * 10
      }));
    },
    shiftY2: function() {
      return this.height - this.shift * 10;
    }
  },
  methods: { }
}
</script>


<style lang='scss' scoped>

</style>
