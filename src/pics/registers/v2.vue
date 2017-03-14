<template>
  <svg width="192" height="352">
    <g opacity="0.5" transform="translate(1,1)">
      <cpuBase :height="350" />
    </g>
    <block width="180" :height="160" x="5" y="181">
      <blockTitle>Registers</blockTitle>
      <register :x="leftX" :y="line(1)">rax</register>
      <register :x="leftX" :y="line(2)">rbx</register>
      <register :x="leftX" :y="line(3)">rcx</register>
      <register :x="leftX" :y="line(4)">rdx</register>
      <register :x="leftX" :y="line(6)">rip</register>

      <register :x="rightX" :y="line(1)">rsi</register>
      <register :x="rightX" :y="line(2)">rdi</register>
      <register :x="rightX" :y="line(3)">rsp</register>
      <register :x="rightX" :y="line(4)">rbp</register>
      <register :x="rightX" :y="line(6)">rflags</register>

    </block>
  </svg>
</template>

<script>

export default {
  components: {
    register: require('./register')
  },
  computed: {
    leftX: function functionName() {
      return 50;
    },
    rightX: function functionName() {
      return 130;
    },
  },
  methods: {
    line: function(l) {
      return l * 20 + 25;
    }
  }
}
</script>

<style lang='scss'>

</style>
