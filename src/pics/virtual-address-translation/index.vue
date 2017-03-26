<!--
TODO:
  * Level table
  * Memmory
  * Offset
 -->

<template>
  <svg width="580" height="591">
    <tb :x="1" :y="1" :cols="20" :shift="3" />
    <curvyArrow
      :x1="200" :y1="300"
      :x2="110" :y2="200"
      :cols="20" :shift="3"
      orientation="tr"
    />
  </svg>
</template>

<script>
export default {
  components: {
    'tb': require('./table')
  },
  computed: { },
  methods: { }
}
</script>


<style lang='scss' scoped>

</style>
