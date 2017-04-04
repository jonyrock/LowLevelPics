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
        { text: 'xt_square', style:'mono' },
        { text: '...', width: 40 },
      ];
    },
    squareDict: function() {
      return [
        { text: 'link', width: 60, bold: true },
        { text: 's', style:'mono' },
        { text: 'q', style:'mono' },
        { text: 'u', style:'mono' },
        { text: 'a', style:'mono' },
        { text: 'r', style:'mono' },
        { text: 'e', style:'mono' },
        { text: '0', style:'mono', bold: true },
        { text: 'flags', width: 60, bold: true },
        { text: 'docol', style:'mono' },
        { text: 'xt_dup', style:'mono' },
        { text: 'xt_mul', style:'mono'},
        { text: 'xt_exit', style:'mono' },
      ];
    },
    dupDict: function() {
      return [
        { text: 'link', width: 60, bold: true },
        { text: 'd', style:'mono' },
        { text: 'u', style:'mono' },
        { text: 'p', style:'mono' },
        { text: '0', style:'mono', bold: true },
        { text: 'dup_impl', style:'mono' },
      ];
    }
  }
}
</script>


<style lang='scss' scoped>
</style>
