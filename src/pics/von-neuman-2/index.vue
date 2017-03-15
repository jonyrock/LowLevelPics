<template>
  <svg width="272" height="192">
    <g transform="translate(1,1)">
      <block width="270" height="190" x="0" y="0">
        <blockTitle> Memory </blockTitle>
        <g transform="translate(10, 35)">
          <mu y="0"   value="11011100" address="0000 0000" />
          <mu y="30"  value="10011110" address="0000 0001" />
          <mu y="60"  value="11111001" address="0000 0002" />
          <mu y="120" value="00110010" address="FFFF FFFF" />
        </g>

        <text font-weight="bold" :x="270 / 2" y="140" text-anchor="middle"> ... </text>
      </block>
    </g>
  </svg>
</template>

<script>
export default {
  components: {
    mu: require('./memory-unit')
  }
}
</script>


<style lang='scss' scoped>

</style>
