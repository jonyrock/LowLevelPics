<template>

<line
  :x1="x" :x2="x"
  y1='0' y2='500'
/>

</template>

<script>
export default {
  props: {
    x: {
      type: Number,
      required: true
    }
  }
}

</script>

<style scoped>
line {
  stroke: gray;
  stroke-width: 1;
}
</style>
