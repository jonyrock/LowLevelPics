<template>
  <svg width="192" height="432">
    <g transform="translate(1,1)" class="nonactive">
      <cpuBase :height="430" />
    </g>
    <block width="180" :height="240" x="5" y="181">
      <blockTitle>Registers</blockTitle>
      <rb :x="leftX" :y="line(1)"   value="D64905E5">rax</rb>
      <rb :x="leftX" :y="line(2)"   value="68D10711">rbx</rb>
      <rb :x="leftX" :y="line(3)"   value="686DB5C5">rcx</rb>
      <rb :x="leftX" :y="line(4)"   value="735437D4">rdx</rb>
      <rb :x="leftX" :y="line(5.2)" value="72396D33">rip</rb>

      <rb :x="rightX" :y="line(1)" value="E2809473">rsi</rb>
      <rb :x="rightX" :y="line(2)" value="534C972C">rdi</rb>
      <rb :x="rightX" :y="line(3)" value="B3AD80AB">rsp</rb>
      <rb :x="rightX" :y="line(4)" value="75732E3E">rbp</rb>
      <rb :x="rightX" :y="line(5.2)" value="FF8B2489">rflags</rb>
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
