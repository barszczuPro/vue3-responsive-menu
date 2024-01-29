<script setup lang="ts">
import MenuItem from "./menu.json"
</script>

<template>
  <h1> vue3-responsive-menu </h1>
  <header>
    <responsive-menu :items="MenuItem" />
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0 auto;
  height: 60px;
}
</style>
