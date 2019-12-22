<template>
  <ul class="actions">
    <li class="actions__item actions__item--clear" v-on:click.prevent="filteredOnClick">X</li>
    <li class="actions__item">-</li>
    <li class="actions__item">+</li>
    <li class="actions__item">++</li>
  </ul>
</template>

<script>
  export default {
    props: {
      onClick: Function
    },
    methods: {
      filteredOnClick() {
        if (typeof this.onClick === 'function') this.onClick();
      }
    },
  }
</script>

<style lang="scss" scoped>
.NuxtLogo {
  animation: 1s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
