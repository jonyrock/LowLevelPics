<template>

  <g transform="translate(0, 50)">

    <g transform="translate(160, 0)">
      <pt :x1="0" :x2="79"
          :y1="115" :y2="205"
          :isPath="true"
      />
      <pt :x1="0" :x2="79"
          :y1="145" :y2="1"
      />
      <pt :x1="0" :x2="79"
          :y1="165" :y2="300"
      />
      <pt :x1="0" :x2="79"
          :y1="285" :y2="409"
      />
      <pt :x1="0" :x2="79"
          :y1="335" :y2="97"
      />
    </g>

    <g transform="translate(320, 0)">
      <pt :x1="0" :x2="79"
          :y1="13" :y2="1"
      />
      <pt :x1="0" :x2="79"
          :y1="29" :y2="97"
      />
      <pt :x1="0" :x2="79"
          :y1="249" :y2="205"
          :isPath="true"
      />
      <pt :x1="0" :x2="79"
          :y1="376" :y2="313"
      />
      <pt :x1="0" :x2="79"
          :y1="445" :y2="409"
      />
    </g>

    <g transform="translate(480, 0)">
      <pt :x1="0" :x2="79"
          :y1="13" :y2="1"
      />
      <pt :x1="0" :x2="79"
          :y1="125" :y2="205"
      />
      <pt :x1="0" :x2="79"
          :y1="257" :y2="97"
          :isPath="true"
      />
      <pt :x1="0" :x2="79"
          :y1="372" :y2="301"
      />
      <pt :x1="0" :x2="79"
          :y1="445" :y2="409"
      />
    </g>

    <g transform="translate(640, 0)">
      <pt :x1="0" :x2="79"
          :y1="13" :y2="81"
      />
      <pt :x1="0" :x2="79"
          :y1="29" :y2="177"
      />
      <pt :x1="0" :x2="79"
          :y1="125" :y2="300"
          :isPath="true"
      />
      <pt :x1="0" :x2="79"
          :y1="248" :y2="393"
      />
      <pt :x1="0" :x2="79"
          :y1="376" :y2="340"
      />

    </g>


  </g>

</template>

<script>
export default {
  components: {
    pt: require('./pointer')
  }
}

</script>
