<template>
  <g :transform="`translate(${x}, ${y})`">
    <text
      :x="60" :y="0"
      text-anchor="middle"
      font-size="13"
    >
      page frame
    </text>

    <g transform="scale(0.8)">
      <tb
        :x="25" :y="10" :cols="10"
        :width="40"
      />
    </g>

  </g>
</template>

<script>
export default {
  props: {
    x: {
      type:Number,
      default: 0
    },
    y: {
      type:Number,
      required:true
    }
  },
  components: {
    'tb': require('./table')
  }
}
</script>
