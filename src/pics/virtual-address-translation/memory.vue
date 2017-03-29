<template>
  <!-- <g :transform="`translate(${x}, ${y})`">


  </g> -->

  <block :x="x" :y="y" width="120" height="485">
    <blockTitle> Memory </blockTitle>
    <g transform="translate(0, 40)">
      <pf :x="0" :y="0" />
      <pf :x="0" :y="105" />
      <tdots :x="60" :y="195 + 10" />
      <pf :x="0" :y="225" />
      <tdots :x="60" :y="315 + 10" />
      <pf :x="0" :y="345" />
    </g>
  </block>
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
    pf: require('./page-frame')
  }
}
</script>


<style lang='scss' scoped>

</style>
