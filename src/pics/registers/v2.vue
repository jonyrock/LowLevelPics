<template>
  <svg width="192" height="432">
    <g transform="translate(1,1)" class="nonactive">
      <cpuBase :height="430" />
    </g>
    <block width="180" :height="240" x="5" y="181">
      <blockTitle>Registers</blockTitle>
      <rb :x="leftX" :y="line(1)"   value="d64905e5">rax</rb>
      <rb :x="leftX" :y="line(2)"   value="68d10711">rbx</rb>
      <rb :x="leftX" :y="line(3)"   value="686db5c5">rcx</rb>
      <rb :x="leftX" :y="line(4)"   value="735437d4">rdx</rb>
      <rb :x="leftX" :y="line(5.2)" value="72396d33">rip</rb>

      <rb :x="rightX" :y="line(1)" value="e2809473">rsi</rb>
      <rb :x="rightX" :y="line(2)" value="534c972c">rdi</rb>
      <rb :x="rightX" :y="line(3)" value="b3ad80ab">rsp</rb>
      <rb :x="rightX" :y="line(4)" value="75732e3e">rbp</rb>
      <rb :x="rightX" :y="line(5.2)" value="ff8b2489">rflags</rb>
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
      return 46.5;
    },
    rightX: function functionName() {
      return 133.5;
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
