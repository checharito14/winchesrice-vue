<script setup>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
</script>

<template>
  <div class="app-container">
    <TheHeader />
    <div class="main-content">
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
    font-family: $fuente_principal;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

img {
    max-width: 100%;
}

a {
    text-decoration: none;
}


</style>
