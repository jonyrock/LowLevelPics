<template>
  <svg width="800" height="352">
    <boxedWords
      :x="100" :y="20"
      :words="prog"
    />

    <boxedWords
      :x="100" :y="100"
      :words="squareDict"
    />

    <boxedWords
      :x="400" :y="180"
      :words="dupDict"
    />

  </svg>
</template>

<script>

export default {
  computed: {
    prog: function() {
      return [
        { text: '...',  width: 40 },
        { text: 'xt_square', width: 100 },
        { text: '...', width: 40 },
      ];
    },
    squareDict: function() {
      return [
        { text: 'link', width: 60, bold: true },
        { text: 's', width: 20 },
        { text: 'q', width: 20 },
        { text: 'u', width: 20 },
        { text: 'a', width: 20 },
        { text: 'r', width: 20 },
        { text: 'e', width: 20 },
        { text: '0', width: 20, bold: true },
        { text: 'flags', width: 60, bold: true },
        { text: 'docol', width: 60 },
        { text: 'xt_dup', width: 80 },
        { text: 'xt_mul', width: 80 },
        { text: 'xt_exit', width: 80 },
      ];
    },
    dupDict: function() {
      return [
        { text: 'link', width: 60, bold: true },
        { text: 'd', width: 20 },
        { text: 'u', width: 20 },
        { text: 'p', width: 20 },
        { text: '0', width: 20, bold: true },
        { text: 'dup_impl', width: 100 },
      ];
    }
  }
}
</script>


<style lang='scss' scoped>
</style>
