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
    <boxedText :x="90" :value="value" />

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
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
