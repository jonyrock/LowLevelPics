<!--
TODO:
  * Level table
  * Memmory
  * Offset
 -->

<template>
  <svg width="800" height="650">

    <bt :x="110" :y="35" text="Page Map, Level 4 level" />
    <bt :x="750" :y="35" text="Memory" />
    <g id="pml4" transform='translate(60, 60)'>

      <tb :x="0" :y="0" :cols="30" :shift="3" />
      <r x="0" y="350">cr3</r>
      <arrow :x1="0" :x2="0" :y1="335" :y2="300" />cr3
    </g>

    <g id="innerLevels" transform="translate(200, 1)">
      <il
        :x="lis[0]" items="bs4.bb.b"
        name="Page Directory,Pointer Tables"
      />
      <il
        :x="lis[1]" items="bs2.bb.b"
        name="Page Directory"
      />
      <il
        :x="lis[2]" items="bs2.b.bb"
        name="Page Table"
      />


      <sep :x="480" />


    </g>

    <!-- <g id="memory">
      <tb :x="60" :y="40" :cols="30" :shift="3" />
    </g> -->

    <g id="address">
      <!--
        <curvyArrow
          :x1="200" :y1="300"
          :x2="110" :y2="200"
          :cols="20" :shift="3"
          orientation="tr"
        />
      -->
    </g>
  </svg>
</template>

<script>

export default {
  components: {
    tb: require('./table'),
    il: require('./innerLevel'),
    sep: require('./separator'),
    r: require('../registers/register'),
    bt: require('./blockTitle'),
  },
  computed: {
    lis: function() {
      return [
        0, 160, 320
      ]
    }
  },
  methods: {
  }
}

</script>


<style lang='scss' scoped>

</style>
