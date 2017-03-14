<template>
  <svg width="192" height="432">
    <g opacity="0.5" transform="translate(1,1)">
      <cpuBase :height="430" />
    </g>
    <block width="180" :height="240" x="5" y="181">
      <blockTitle>Registers</blockTitle>
      <rb :x="leftX" :y="line(1)" value="FFAA0013">rax</rb>
      <rb :x="leftX" :y="line(2)" value="FFAA0013">rbx</rb>
      <rb :x="leftX" :y="line(3)" value="FFAA0013">rcx</rb>
      <rb :x="leftX" :y="line(4)" value="FFAA0013">rdx</rb>
      <rb :x="leftX" :y="line(5.2)" value="FFAA0013">rip</rb>

      <rb :x="rightX" :y="line(1)" value="FFAA0013">rsi</rb>
      <rb :x="rightX" :y="line(2)" value="FFAA0013">rdi</rb>
      <rb :x="rightX" :y="line(3)" value="FFAA0013">rsp</rb>
      <rb :x="rightX" :y="line(4)" value="FFAA0013">rbp</rb>
      <rb :x="rightX" :y="line(5.2)" value="FFAA0013">rflags</rb>
    </block>
  </svg>
</template>

<script>

export default {
  components: {
    rb: require('./register-with-box')
  },
  computed: {
    leftX: function functionName() {
      return 45;
    },
    rightX: function functionName() {
      return 135;
    },
  },
  methods: {
    line: function(l) {
      return l * 40 + 5;
    }
  }
}
</script>

<style lang='scss'>

</style>
