<template>
  <svg width="500" height="210">
    <g transform="translate(100,10)">
      <block width="270" height="190" x="0" y="0">
        <text :x="270 / 2" y="20" text-anchor="middle"> Memory </text>
        <g transform="translate(10, 35)">
          <memoryUnit y="0"   value="01111111" address="0000 0000" />
          <memoryUnit y="30"  value="11010111" address="0000 0001" />
          <memoryUnit y="60"  value="11010111" address="0000 0002" />
          <memoryUnit y="120"  value="11010111" address="FFFF FFFF" />
        </g>

        <text font-weight="bold" :x="270 / 2" y="140" text-anchor="middle"> ... </text>
      </block>
    </g>
  </svg>
</template>

<script>
export default {
  components: {
    memoryUnit: require('./memory-unit')
  }
}
</script>


<style lang='scss' scoped>

</style>
