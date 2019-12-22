<template>
  <div class="rootContainer">
    <nuxt />
  </div>
</template>

<style lang="scss">
  @import "~minireset.css/minireset";
  :root {
    --COLOR_BORDER: #ddd;
  }
  html, body, .rootContainer {
    width: 100%;
    height: 100%;
  }
  html {
    font-size: 14px;
  }
  body {
    font-size: 1rem;
    color: #3f3f3f;
  }
  .rootContainer {
    position: relative;
  }
  .componentRootContainer {
    width: inherit;
    height: inherit;
  }
</style>
