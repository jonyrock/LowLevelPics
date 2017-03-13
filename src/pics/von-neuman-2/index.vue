<template>
  <svg width="290" height="210">
    <g transform="translate(10,10)">
      <block width="270" height="190" x="0" y="0">
        <blockTitle> Memory </blockTitle>
        <g transform="translate(10, 35)">
          <memoryUnit y="0"   value="11011100" address="0000 0000" />
          <memoryUnit y="30"  value="10011110" address="0000 0001" />
          <memoryUnit y="60"  value="11111001" address="0000 0002" />
          <memoryUnit y="120" value="00110010" address="FFFF FFFF" />
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
