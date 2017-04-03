<template>
  <g :transform="translate">
    <namedCode name="PLT"
      :x="0" :y="0"
      :height="145" :width="165"
      >
       ...
  call resolve
       ...
  jmp foo@Got
  prepare solving
  jpm
       ...
    </namedCode>

  </g>
</template>

<script>
export default {
  props: {
    x: { type: Number, default: 0 },
    y: { type: Number, default: 0 },
  },
  components: {
    namedCode: require('./named-code')
  },
  computed: {
    translate: function() {
      return `translate(${this.x}, ${this.y + 20})`
    },
  }
}
</script>
