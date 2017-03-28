<template>
<g :transform="`translate(${x}, ${y})`">
<rect
  fill="url(#crosshatch)"
  width="330" height="31.5"
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
    }
  }
}
</script>
