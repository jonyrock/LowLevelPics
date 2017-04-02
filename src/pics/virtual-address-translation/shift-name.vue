<template>
  <text :x="x" :y="y"> {{ name }} </text>
</template>

<script>
export default {
  props: {
    x: {
      type:Number,
      required:true
    },
    y: {
      type:Number,
      required:true
    },
    name: {
      type: String,
      required:true
    }
  }
}
</script>

<style scoped>
text { font-size:13px }
</style>
