<template>
  <svg width="592" height="352">
    <g opacity="0.5" transform="translate(1,1)">
      <cpuBase :height="350" />
    </g>
    <block width="180" :height="160" x="5" y="181">
      <blockTitle>Registers</blockTitle>
      <r :x="leftX" :y="line(1)">rax</r>
      <r :x="leftX" :y="line(2)">rbx</r>
      <r :x="leftX" :y="line(3)">rcx</r>
      <r :x="leftX" :y="line(4)">rdx</r>
      <r :x="leftX" :y="line(6)">rip</r>

      <r :x="rightX" :y="line(1)">rsi</r>
      <r :x="rightX" :y="line(2)">rdi</r>
      <r :x="rightX" :y="line(3)">rsp</r>
      <r :x="rightX" :y="line(4)">rbp</r>
      <r :x="rightX" :y="line(6)">rflags</r>
    </block>

    <block width="270" height="250" x="300" y="1" class="nonactive">
      <blockTitle> Memory </blockTitle>
      <g transform="translate(10, 35)">
        <mu y="0"   value="11011100" address="0000 0000" />
        <mu y="30"  value="10011110" address="0000 0001" />
        <mu y="60"  value="11111001" address="0000 0002" />
        <mu y="120" value="00110010" address="FFFF FFFF" />

        <mu y="180" value="00110010" address="FFFF FFFF" />
      </g>

      <text font-weight="bold" :x="270 / 2" y="140" text-anchor="middle"> ... </text>
      <text font-weight="bold" :x="270 / 2" y="200" text-anchor="middle"> ... </text>
    </block>
  </svg>
</template>

<script>
export default {
  components: {
    r: require('../registers/register'),
    rb: require('../registers/register-with-box'),
    mu: require('../von-neuman-2/memory-unit')
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


<style lang='scss' scoped>

</style>
