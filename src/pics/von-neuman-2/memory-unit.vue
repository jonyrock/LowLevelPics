<!--
TODO:
  * value blocks
  * mono font value / address
-->

<template>
  <g :transform='translate'>
    <text
      class="monofont"
      text-anchor="left"
      x="0"
      y="19"
    >{{address}}</text>

    <g transform='translate(90,0)'>
      <rect
        class='background'
        width="160"
        height="25"
        rx="1"
        ry="1"
      ></rect>
      <g v-for="bit in bits">
        <text
          class="value"
          text-anchor="middle"
          :x="bit.x + 10"
          y="19"
        >
          {{bit.value}}
        </text>
        <line v-if="bit.i != 0"
          y1="0" y2="25"
          :x1="bit.x"
          :x2="bit.x"
          :class="(bit.i == 4) ? 'bitBigSeparator': 'bitSeparator'"
        />
      </g>

    </g>
  </g>

</template>

<script>

export default {
  props: [
    'address',
    'y', 'value'
  ],
  computed: {
    translate: function() {
      return `translate(0, ${this.y})`
    },
    bits: function() {
      return this.value.split('').map((d,i) => ({
        value: d,
        i: i,
        x: i * 20
      }))
    }
  }
}
</script>

<style lang='scss' scoped>
.background {
  fill: none;
  stroke: black;
  stroke-width:1;
}
.value {
  font-size: 16px;
}
.bitSeparator {
  stroke: black;
  stroke-width: 0.5;
}
.bitBigSeparator {
  stroke: black;
  stroke-width: 1;
}
</style>
