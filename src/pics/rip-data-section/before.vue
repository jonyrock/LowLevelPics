<template>
  <svg width="600" height="500">
    <g id="before">
      <ripBase :x="10" :y="1" />
      <g transform="translate(20, 0)">
        <curvyArrow
          :x1="213"
          :x2="162"
          :y1="198"
          :y2="247"
          :strokeWidth="1"
          orientation="lr"
          :isDashed="true"
        />

        <curvyArrow
          :x1="102"
          :x2="213"
          :y1="217"
          :y2="193"
          :s="0"
          :strokeWidth="1"
          orientation="tl"
          :isDashed="false"
        />

        <curvyArrow
          :x1="130"
          :x2="130"
          :y1="78"
          :y2="228"
          :l="15"
          :strokeWidth="1"
          :corner="true"
          orientation="rr"
          :isDashed="false"
        />
      </g>

      <curvyArrow
        :x1="26"
        :x2="26"
        :y1="268"
        :y2="188"
        :l="25"
        :strokeWidth="1"
        :corner="true"
        orientation="ll"
        :isDashed="false"
      />

    </g>
  </svg>
</template>

<script>
export default {
  components: {
    ripBase: require('./rip-base')
  }
}
</script>


<style lang='scss' scoped>

</style>
