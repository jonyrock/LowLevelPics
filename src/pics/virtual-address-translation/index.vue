<!--
TODO:
  * Level table
  * Memmory
  * Offset
 -->

<template>
  <svg width="800" height="650">

    <g id="pml4">
      <tb :x="40" :y="40" :cols="30" :shift="3" />
    </g>

    <g id="innerLevels" transform="translate(200, 1)">
      <il
        :x="0" items="bs4.bb.b"
        name="Page Directory Pointer Tables"
      />
      <il
        :x="200" items="bs2.bb.b"
        name="Page Directory"
      />
      <il
        :x="400" items="bs2.b.bb"
        name="Page Directory"
      />
    </g>

    <g id="address">
      <curvyArrow
        :x1="200" :y1="300"
        :x2="110" :y2="200"
        :cols="20" :shift="3"
        orientation="tr"
      />
    </g>
  </svg>
</template>

<script>
export default {
  components: {
    'tb': require('./table'),
    'il': require('./innerLevel'),
  },
  computed: {
    lis: function() {

    }
  },
  methods: { }
}
</script>


<style lang='scss' scoped>

</style>
