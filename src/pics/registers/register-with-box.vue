<template>
  <g>
    <r :x="x" :y="y"> {{ name }} </r>
    <g :transform="transform">
      <boxedText :value='value'/>
    </g>
  </g>
</template>

<script>
export default {
  props: ['x', 'y', 'value'],
  components: {
    r: require('./register')
  },
  computed: {
    name: function() {
      return this.$slots.default[0].text;
    },
    transform: function() {
      return `translate(${this.x - 40} ${this.y + 5}) scale(0.5)`
    }
  },
  data: function() {
    return {}
  }
}
</script>

<style lang='scss' scoped>
text {
  text-anchor: middle;
  font-size: 16px;
  font-weight: bold;
}
</style>
