<template>
  <g :transform="`translate(${x}, ${y})`">
    <tb cols="40" />
  </g>
</template>

<script>
export default {
  props: {
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    }
  },
  components: {
    tb: require('./table')
  }
}
</script>


<style lang='scss' scoped>

</style>
