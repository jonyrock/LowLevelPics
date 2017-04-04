<template>
  <svg width="430" height="500">
    <g id="before" transform="translate(10,0)">
      <ripBase :x="10" :y="1" />
      <g transform="translate(20, 0)">
        <curvyArrow
          :x1="213"
          :y1="198"
          :y2="287"
          :x2="172"
          :strokeWidth="1"
          orientation="lr"
          :isDashed="true"
        />

        <curvyArrow
          :x1="102"
          :x2="213"
          :y1="257"
          :y2="193"
          :s="5"
          :strokeWidth="1"
          orientation="tl"
          :isDashed="false"
        />

        <curvyArrow
          :x1="130"
          :x2="130"
          :y1="78"
          :y2="266"
          :l="15"
          :strokeWidth="1"
          :corner="true"
          orientation="rr"
          :isDashed="false"
        />
      </g>

      <curvyArrow
        :x1="25"
        :x2="25"
        :y1="308"
        :y2="208"
        :l="30"
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
