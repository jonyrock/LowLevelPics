<template>
  <g :transform="translate">
    <namedCode name=".text (main)"
      :x="0" :y="0"
      :height="65" :width="165"
      >
{{ cd }}
  call resolve
{{ cd }}
    </namedCode>

    <namedCode name=".text (lib)"
      :x="250" :y="0"
      :height="85" :width="165"
      >
{{ cd }}
foo:
  mov mx, rbx
{{ cd }}
    </namedCode>

    <namedCode name="PLT"
      :x="0" :y="110"
      :height="145" :width="165"
      >
{{ cd }}
  call resolve
{{ cd }}
  jmp foo@Got
  prepare solving
  jpm
{{ cd }}
    </namedCode>

    <namedBlock
      name="GOT"
      :x="250" :y="125"

      :height="145" :width="165"
    >
      <g>
      <tb
        :x="0" :y="0"
        :cols="13"
        :width="165"
        filled="3"
      />
      </g>
    </namedBlock>

  </g>
</template>

<script>
export default {
  props: {
    x: { type: Number, default: 0 },
    y: { type: Number, default: 0 },
  },
  components: {
    namedCode: require('./named-code'),
    namedBlock: require('./named-block'),
    tb: require('../virtual-address-translation/table')
  },
  computed: {
    translate: function() {
      return `translate(${this.x}, ${this.y + 20})`
    },
    cd: function() {
      return '       ...';
    }
  }
}
</script>
