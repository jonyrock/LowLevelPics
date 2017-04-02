<template>
  <svg width="850" height="650">

    <defs>
      <pattern id="crosshatch" patternUnits="userSpaceOnUse" width="16" height="16">
        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnPgogIDxyZWN0IHdpZHRoPSc4JyBoZWlnaHQ9JzgnIGZpbGw9JyNmZmYnLz4KICA8cGF0aCBkPSdNMCAwTDggOFpNOCAwTDAgOFonIHN0cm9rZS13aWR0aD0nMC41JyBzdHJva2U9JyNhYWEnLz4KPC9zdmc+Cg==" x="0" y="0" width="16" height="16"> </image>
      </pattern>
    </defs>

    <bt :x="110" :y="35" text="Page Map, Level 4" />

    <g id="pml4" transform='translate(60, 120)'>
      <tb :x="0" :y="0" :cols="30" :shift="4"
        :filled="[4, 7, 9, 21, 26]"
       />
      <r x="45" y="-40">cr3</r>
      <arrow :x1="40" :x2="-7" :y1="-35" :y2="3" strokeWidth="1" />
    </g>

    <g id="innerLevels" transform="translate(200, 1)">
      <il
        v-for="li in lis"
        :x="li.x"
        :items="li.items"
        :name="li.name"
        :filled="li.filled"
      />
    </g>

    <memory :x="705" :y="40" />

    <pointers />

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


    <g id="shift-names">
      <sn :x="163" :y="116" name="A" />
      <sn :x="321" :y="252" name="B" />
      <sn :x="481" :y="252" name="C" />
      <sn :x="641" :y="145" name="D" />
      <sn :x="806" :y="310" name="E" />
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
    memory: require('./memory'),
    pointers: require('./pointers'),
    sn: require('./shift-name')
  },
  computed: {
    lis: function() {
      return [
        {
          x: 0,
          name: "Page Directory,Pointer Tables",
          items: "bb.s5b.b",
          filled: ['13', '', '5', '9', '4']
        },
        {
          x: 160,
          name: "Page Directory",
          items: "bb.s6.bb",
          filled: ['3', '3', '6', '7', '4']
        },
        {
          x: 320,
          name: "Page Table",
          items: "bs3.bb.b",
          filled: ['14', '3', '', '', '0']
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
