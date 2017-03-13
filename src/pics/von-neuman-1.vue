<template>
  <svg width="500" height="220">
    <g transform="translate(10,10)">
      <block width="190" height="185" x="0" y="0">
        <text x="95" y="20" text-anchor="middle"> CPU </text>
        <block width="180" height="70" x="5" y="30" label="Control Unit" />
        <block width="180" height="70" x="5" y="105" label="ALU" />
      </block>
      <block width="180" height="70" x="300" y="65" label="Memory" />
      <dearrow x1="190" y1="100" x2="300" y2="100" />
    </g>
  </svg>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
</style>
