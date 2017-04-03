<template>
<g :transform="`translate(${x}, ${y})`">
<rect
  y="1"
  fill="url(#crosshatch)"
  :width="width3"
  height="31"
  transform="scale(0.3)"
  stroke-width="0"
></rect>
</g>
</template>

<script>
export default {
  props: {
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
    width: { type: Number, default: 100 }
  },
  computed: {
    width3: function() {
      return this.width * 3.3
    }
  }
}
</script>
