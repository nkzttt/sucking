<template>
  <div class="componentRootContainer">
    <p class="total">
      今日は
      <span class="total__count">{{count}}回</span>
      で、合計
      <span class="total__value">{{value}}ml</span>
      あげました。
    </p>
  </div>
</template>

<script>
  export default {
    props: ['count', 'value']
  }
</script>

<style lang="scss" scoped>
  .total {
    width: 100%;
    text-align: center;
    &__value,
    &__count {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
</style>
