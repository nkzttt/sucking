<template>
  <div class="componentRootContainer">
    <ul class="actions">
      <li class="actions__item actions__item--clear" v-on:click.prevent="filteredOnClick">X</li>
      <li class="actions__item">-</li>
      <li class="actions__item">+</li>
      <li class="actions__item">++</li>
    </ul>
  </div>
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
  .actions {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #069;
    color: #fff;
    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25%;
      height: 100%;
      font-size: 1.5rem;
      font-weight: bold;
      &--clear {
        background-color: #ddd;
        color: #aaa;
      }
    }
  }
</style>
