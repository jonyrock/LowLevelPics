<!--
TODO:
  * Level table
  * Memmory
  * Offset
 -->

<template>
  <svg width="850" height="650">

    <defs>
      <pattern id="crosshatch" patternUnits="userSpaceOnUse" width="16" height="16">
        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnPgogIDxyZWN0IHdpZHRoPSc4JyBoZWlnaHQ9JzgnIGZpbGw9JyNmZmYnLz4KICA8cGF0aCBkPSdNMCAwTDggOFpNOCAwTDAgOFonIHN0cm9rZS13aWR0aD0nMC41JyBzdHJva2U9JyNhYWEnLz4KPC9zdmc+Cg==" x="0" y="0" width="16" height="16"> </image>
      </pattern>
    </defs>

    <bt :x="110" :y="35" text="Page Map, Level 4 level" />

    <g id="pml4" transform='translate(60, 60)'>

      <tb :x="0" :y="0" :cols="30" :shift="3" />
      <r x="0" y="350">cr3</r>
      <arrow :x1="0" :x2="0" :y1="335" :y2="300" />cr3
    </g>

    <g id="innerLevels" transform="translate(200, 1)">
      <il
        v-for="li in lis"
        :x="li.x"
        :items="li.items"
        :name="li.name"
        :filled="li.filled"
      />

      <sep :x="480" />

    </g>

    <bt :x="770" :y="35" text="Memory" />
    <m :x="720" :y="50" />
    <!-- <g id="memory">
      <tb :x="60" :y="40" :cols="30" :shift="3" />
    </g> -->

    <g id="emtyBlocks">

    </g>

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
    m: require('./memory')
  },
  computed: {
    lis: function() {
      return [
        {
          x: 0,
          name: "Page Directory,Pointer Tables",
          items: "bs5.bb.b",
          filled: ['13', '4', '', '9', '4']
        },
        {
          x: 160,
          name: "Page Directory",
          items: "bb.s3.bb",
          filled: ['', '3', '6']
        },
        {
          x: 320,
          name: "Page Table",
          items: "bs4.bb.b",
          filled: '134'
        }
      ]
    }
  },
  methods: {
  }
}

</script>


<style lang='scss' scoped>

</style>
