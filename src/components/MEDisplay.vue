<template>
  <div class="me-display">
    <template v-for="token in getTokens">
      <katex-element :expression="separateFormula(token)" v-if="checkIsFormula(token)"/>

      <template v-else>{{ token }}</template>
    </template>
  </div>
</template>

<script>
export default {
  name: "MEDisplay",

  props: {
    text: {
      type: String,
      require: true,
      validator(value) {
        return value.trim();
      }
    },

    startSymbol: {
      type: String,
      default: '$$'
    },

    endSymbol: {
      type: String,
      default: '$$'
    }
  },

  computed: {
    getTokens() {
      const startSymbolEscaped = this.startSymbol.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const endSymbolEscaped = this.endSymbol.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

      const regex = new RegExp(`(${startSymbolEscaped}.*?${endSymbolEscaped})`, 'g');
      return this.text.split(regex).filter(token => token.trim() !== '');
    }
  },

  methods: {
    checkIsFormula(token) {
      return token.includes(this.startSymbol) && token.includes(this.endSymbol);
    },

    separateFormula(token) {
      return token.replace(this.startSymbol, '').replace(this.endSymbol, '');
    }
  }
}
</script>

<style scoped>
</style>