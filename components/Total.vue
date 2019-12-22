<template>
  <p class="total">
    今日は
    <span class="total__count">{{count}}</span>
    回、
    <span class="total__value">{{value}}</span>
    ml
    あげました。
  </p>
</template>

<script>
  export default {
    props: ['count', 'value']
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
