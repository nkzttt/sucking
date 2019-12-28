<template>
  <div class="componentRootContainer">
    <div class="date">
      <div class="date__prev" @click.prevent="onClickPrev(date)">＜</div>
      <p class="date__display">{{formatDate(date)}}</p>
      <div class="date__next" @click.prevent="onClickNext(date)">＞</div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import format from 'date-fns/format';
  import addDays from 'date-fns/addDays';
  import subDays from 'date-fns/subDays';

  export default {
    computed: mapState({
      date: state => new Date(state.store.dateStr),
    }),
    methods: {
      formatDate(date) {
        return format(date, 'yyyy年MM月dd日');
      },
      onClickPrev(date) {
        const newDate = subDays(date, 1);
        this.$store.commit('store/setDate', format(newDate, 'yyyy-MM-dd'));
      },
      onClickNext(date) {
        const newDate = addDays(date, 1);
        this.$store.commit('store/setDate', format(newDate, 'yyyy-MM-dd'));
      },
    },
  }
</script>

<style lang="scss" scoped>
  .date {
    display: flex;
    align-items: center;
    &__prev,
    &__next {
      width: 15%;
      color: #aaa;
      font-size: 1.4rem;
      font-weight: bold;
      text-align: center;
    }
    &__display {
      flex: 1;
      text-align: center;
    }
  }
</style>
