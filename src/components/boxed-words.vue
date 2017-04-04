<template>
  <g :transform='translate'>
    <rect
      class='background'
      :width="width"
      x="0"
      height="28"
      rx="1"
      ry="1"
    ></rect>

    <text
      v-for="w in wwrods"
      :text-anchor="w.textAnchor"
      :x="w.tx"
      :y="20"
    >
      {{ w.text }}
    </text>

    <line
      v-for="line in lines"
      y1="0" y2="28"
      :x1="line.x + line.width"
      :x2="line.x + line.width"
      :class="(line.bold) ? 'bigSeparator': 'separator'"
    />

  </g>
</template>

<script>
const _ = require('lodash');
export default {
  props: {
    x: { type: Number, default: 0 },
    y: { type: Number, default: 0 },
    words: { type: Array, required: true },
  },
  data: function() {
    return {
    }
  },
  computed: {
    translate: function() {
      return `translate(${this.x}, ${this.y})`
    },
    wwrods: function() {
      var res = [];
      var cx = 0;
      for(var wi in this.words) {
        var w = this.words[wi];
        var r = {}

        r.text = w.text;
        r.x = cx;
        r.width = r.text.length * 11;
        if(w.width) {
          r.width = w.width;
        }
        r.textAnchor = 'middle';
        r.tx = r.x + r.width / 2;

        r.bold = w.bold;
        res.push(r);
        cx += r.width;

      }
      return res;
    },
    lines: function() {
      return _.take(this.wwrods, this.wwrods.length - 1);
    },
    width: function() {
      var w = this.wwrods[this.wwrods.length - 1];
      return w.x + w.width;
    }
  }

}
</script>

<style lang='scss' scoped>
text {
  font-size: 18px;
}
.separator {
  stroke-width: 0.5;
}
.bigSeparator {
  stroke-width: 1;
}
.background {
  fill: none;
  stroke-width:1;
}
</style>
