<template>
  <div>
    <div class="header">
      <div class="header__centeringContainer">
        <div class="header__total">
          <total :count="3" :value="10" />
        </div>
        <ul class="items">
          <li class="items__title"></li>
          <li class="items__title">授乳</li>
          <li class="items__title">搾乳</li>
          <li class="items__title">ミルク</li>
        </ul>
      </div>
    </div>
    <div class="actions">
      <div class="actions__centeringContainer">
        <actions :on-click-action="onClickAction" />
      </div>
    </div>
    <div class="main">
      <notes :on-click-cell="onClickCell" />
    </div>
  </div>
</template>

<script>
import Total from '~/components/Total.vue'
import Notes from '~/components/Notes.vue'
import Actions from '~/components/Actions.vue'

export default {
  components: {
    Total,
    Notes,
    Actions,
  },
  methods: {
    onClickAction(type) {
      console.log(type);
    },
    onClickCell({hour, minute, type}) {
      console.log({hour, minute, type});
    }
  }
}
</script>

<style lang="scss" scoped>
  $HEADER_HEIGHT: 80px;
  $ACTIONS_HEIGHT: 60px;
  .header {
    display: flex;
    align-items: center;
    width: 100%;
    height: $HEADER_HEIGHT;
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: solid 3px var(--COLOR_BORDER);
    background-color: #fff;
    &__centeringContainer {
      width: 100%;
    }
    &__total {
      margin-bottom: 15px;
    }
  }
  .actions {
    display: flex;
    align-items: center;
    width: 100%;
    height: $ACTIONS_HEIGHT;
    position: fixed;
    bottom: 0;
    left: 0;
    &__centeringContainer {
      width: 100%;
      height: 100%;
    }
  }
  .main {
    padding: $HEADER_HEIGHT 0 $ACTIONS_HEIGHT;
    overflow: scroll;
  }
  .items {
    display: flex;
    width: 100%;
    &__title {
      width: 25%;
      text-align: center;
    }
  }
</style>
