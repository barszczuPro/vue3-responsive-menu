<script setup lang="ts">
import MenuItem from './menu.json'
import { ref } from 'vue'

const mode = ref('')
</script>

<template>
  <header>
    <responsive-menu :items="MenuItem" :mode="mode" />
  </header>
  <div class="settings">
    <span class="settings__title">Settings:</span>
    <span class="settings__mode">Mode: {{ mode }}</span>
    <div>
      <input type="radio" id="simpleMode" value="" v-model="mode" />
      <label for="simpleMode">Simple</label>
    </div>
    <div>
      <input type="radio" id="darkMode" value="dark" v-model="mode" />
      <label for="darkMode">Dark</label>
    </div>
    <div>
      <input type="radio" id="macMode" value="mac" v-model="mode" />
      <label for="macMode">Mac</label>
    </div>
  </div>
  <footer>
    vue3-responsive-menu |
    <a href="https://github.com/barszczuPro/vue3-responsive-menu" target="_blank">GitHub</a>
  </footer>
</template>

<style scoped lang="scss">
header {
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0 auto;
  height: 60px;
}

.settings {
  position: absolute;
  bottom: 60px;
  background-color: grey;
  width: 300px;
  border-radius: 20px;
  margin: 10px;
  padding: 20px;
  box-sizing: border-box;
  color: white;
  display: flex;
  flex-direction: column;
  &__title {
    font-weight: bold;
    font-size: 18px;
    padding-bottom: 10px;
  }
}

footer {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  border: 1px solid grey;
  & a {
    text-decoration: none;
    color: unset;
    padding-left: 5px;
  }
}
</style>
