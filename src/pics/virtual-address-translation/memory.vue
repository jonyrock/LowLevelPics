<template>
  <g :transform="`translate(${x}, ${y})`">
    <tb
      :cols="40" :x="0" :y="0"
      :filled="[1,2,3,5,7,10,12,13,14,15,20,21,22,23,24,25,28,29,30,31,32,33,34,35,36,37,38,39]"
    />
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
