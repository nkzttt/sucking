<template>
  <div>
    <div class="header">
      <div class="header__date">
        <date-switcher />
      </div>
      <div class="header__total">
        <total :count="3" :value="10" />
      </div>
      <div class="header__items">
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
  import DateSwitcher from '~/components/DateSwitcher.vue'
  import Total from '~/components/Total.vue'
  import Notes from '~/components/Notes.vue'
  import Actions from '~/components/Actions.vue'

  export default {
    components: {
      DateSwitcher,
      Total,
      Notes,
      Actions,
    },
    data() {
      return {
        focusedData: null,
      }
    },
    methods: {
      onClickAction(type) {
        if (!this.focusedData) return;

        let value;
        switch (type) {
          case 'decrease':
            value = -10;
            break;
          case 'increase':
            value = 10;
            break;
          case 'moreIncrease':
            value = 100;
            break;
          default:
            break;
        }
        if (!value) return;

        this.$store.commit('store/setNotes', {
          value,
          ...this.focusedData,
        });
      },
      onClickCell({ hour, minute, type }) {
        this.focusedData = { hour, minute, type };
      }
    }
  }
</script>

<style lang="scss" scoped>
  $HEADER_HEIGHT: 100px;
  $ACTIONS_HEIGHT: 60px;
  .header {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: $HEADER_HEIGHT;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    &__date,
    &__total,
    &__items {
      display: flex;
      align-items: center;
      width: 100%;
    }
    &__items {
      background-color: #ddd;
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
