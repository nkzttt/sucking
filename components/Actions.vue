<template>
  <div class="componentRootContainer">
    <ul class="actions">
      <li class="actions__item actions__item--clear" @click.prevent="filteredOnClickAction('clear')">X</li>
      <li class="actions__item" @click.prevent="filteredOnClickAction('decrease')">-</li>
      <li class="actions__item" @click.prevent="filteredOnClickAction('increase')">+</li>
      <li class="actions__item" @click.prevent="filteredOnClickAction('moreIncrease')">++</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      onClickAction: Function
    },
    methods: {
      filteredOnClickAction(type) {
        if (typeof this.onClickAction === 'function') this.onClickAction(type);
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
