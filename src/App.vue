<template>
  <div class="wrapper">
    <div class="demo">
      <MEDisplay :text="textareaValue" start-symbol="[math]" end-symbol="[\math]"/>
    </div>
  </div>
</template>

<script>
import MEDisplay from "@/components/MEDisplay.vue";

export default {
  components: {
    MEDisplay
  },

  data() {
    return {
      textareaValue: 'Я Георгий и мне нравятся формула [math]x^2 \\to 0[\\math], а Ксюше нравится формула [math] \\lim\\limits_{x \\to 0} f(x) [\\math]'
    }
  }
}


</script>

<style scoped>
.wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.demo {
  width: 700px;
  height: 300px;
  border: 1px solid gray;
  padding: 20px;
}
</style>
