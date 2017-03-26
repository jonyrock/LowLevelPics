<!--
TODO:
  * Level table
  * Memmory
  * Offset
 -->

<template>
  <svg width="580" height="591">
    <tb :x="1" :y="1" :cols="20" />
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
