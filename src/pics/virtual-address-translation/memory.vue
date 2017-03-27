<template>
  <block width="100" :height="height" :x="x" :y="y">
    <line
      v-for="col in ccols"
      x1="0" x2="100"
      :y1="col.y" :y2="col.y"
    />
    <arrow
      v-if="shift"
      :x1="110"
      :x2="110"
      :y1="height"
      :y2="shiftY2"
    />
  </block>
</template>

<script>

</script>


<style lang='scss' scoped>

</style>
