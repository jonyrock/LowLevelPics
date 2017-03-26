<template>
  <g :transform="`translate(${x}, 0)`">
    <line
      :x1="0" :x2="0"
      y1="0"
      y2="500"
      class="separator"
      stroke="gray"
    />

    <g transform="scale(0.8)">
      <g v-for="block in blocks">
        <tb v-if="block.type == 'b'"
          :x="50" :y="block.y" :cols="10"
        />
        <tb v-if="block.type == 's'"
          :x="50" :y="block.y" :cols="10"
          :shift='block.shift'
        />
        <tdots v-if="block.type == '.'"
          :x="100"
          :y="block.y"
        />
      </g>
    </g>

  </g>
</template>

<script>

export default {
 props: {
   name: {
     type: String,
     required: true
   },
   x: {
     type: Number,
     required: true
   },
   items: {
     type: String,
     required: true
   }
 },
 components: {
   'tb': require('./table'),
 },
 computed: {
   blocks: function() {
     var y = 0;
     var res = [];
     for(var i = 0; i < this.items.length; i++) {
       var c = this.items[i];
       var r = {
         type: c
       }
       r.y = y;
       if(c == 'b' || c == 's') {
         y += 120;
       }
       if(c == '.') {
         y += 15;
       }
       if(c == 's') {
         r.shift = +this.items[i + 1];
         i++;
       }
       res.push(r);
     }
     return res;
   }
 }
}

</script>


<style lang='scss' scoped>
line.separator {
  stroke: gray;
  stroke-width: 2;
}
</style>
