<script setup lang="ts">
import MenuItem from "./menu.json"
import {ref} from "vue";

const mode = ref("Simple")
</script>

<template>
  <header>
    <responsive-menu :items="MenuItem" />
  </header>
  <div class="settings">
    <span class="settings__title">Settings:</span>
    <span class="settings__mode">Mode: {{ mode }}</span>
    <div>
      <input type="radio" id="simple" value="Simple" v-model="mode" />
      <label for="simple">Simple</label>
    </div>
    <div>
      <input type="radio" id="darkMode" value="Dark mode" v-model="mode" />
      <label for="darkMode">Dark mode</label>
    </div>
  </div>
  <footer>
    vue3-responsive-menu | <a href="https://github.com/barszczuPro/vue3-responsive-menu" target="_blank">GitHub</a>
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
  height: 150px;
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
