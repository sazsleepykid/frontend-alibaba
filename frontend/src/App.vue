<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
});
</script>

<style>
:root {
  --primary: #009688;
  --primary-light: #e6f7f5;
  --text-primary: #333333;
  --text-secondary: #666666;
  --border: #e0e0e0;
  --background: #f9f9f9;
  --card: #ffffff;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: var(--text-primary);
  line-height: 1.5;
  background-color: var(--background);
}

#app {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

button {
  font-family: inherit;
}

h1, h2, h3, h4, h5, h6 {
  color: var(--text-primary);
}

a {
  color: var(--primary);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>