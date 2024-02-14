<script setup lang="ts">
import {ref} from 'vue'

const config = ref({
  mode: '',
  labelMore: 'More'
})

const menuItem = [
  {
    label: "Home",
    onClick: () => alert("Home")
  },
  {
    label: "About us",
    onClick: () => alert("About us"),
  },
  {
    label: "Photos",
    onClick: () => alert("Photos"),
  },
  {
    label: "Categories",
    iconLeft: {name: 'box'},
    iconRight: {name: 'arrow-down'},
    onClick: () => alert("Categories"),
    submenu: [
      {
        iconLeft: {name: 'box'},
        label: "Categories 1",
        onClick: () => alert("Categories 1"),
      },
      {
        iconLeft: {name: 'box'},
        label: "Categories 2",
        onClick: () => alert("Categories 2"),
      },
      {
        iconLeft: {name: 'box'},
        label: "Categories 3",
        onClick: () => alert("Categories 3"),
      }
    ]
  },
  {
    label: "Link 5",
    onClick: () => alert("Link 5"),
  },
  {
    label: "Link 6",
    onClick: () => alert("Link 6"),
  },
  {
    label: "Link 7",
    onClick: () => alert("Link 7"),
  },
  {
    label: "Link 8 Very long text",
    onClick: () => alert("Link 8"),
    wrap: true,
    submenu: [
      {
        label: "Link 8_1 Very long text Very long text Very long text",
        onClick: () => alert("Link 8_1 Very long text Very long text Very long text"),
      },
      {
        label: "Link 8_2",
        onClick: () => alert("Link 8_2"),
      },
      {
        label: "Link 8_3",
        onClick: () => alert("Link 8_3"),
      }
    ]
  },
  {
    label: "Link 9",
    iconRight: {name: 'users'},
    onClick: () => alert("Link 9"),
  },
  {
    label: "Link 10",
    onClick: () => alert("Link 10"),
  },
  {
    label: "Link 11",
    onClick: () => alert("Link 11"),
  }
]

</script>

<template>
  <header>
    <responsive-menu :items="menuItem" :config="config"/>
  </header>
  <div class="settings">
    <span class="settings__title">Settings:</span>
    <span class="settings__mode">Mode: {{ config.mode }}</span>
    <div>
      <input type="radio" id="simpleMode" value="" v-model="config.mode"/>
      <label for="simpleMode">Simple</label>
    </div>
    <div>
      <input type="radio" id="darkMode" value="dark" v-model="config.mode"/>
      <label for="darkMode">Dark</label>
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
}

.container-test {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
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
