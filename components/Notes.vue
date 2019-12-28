<template>
  <div class="componentRootContainer">
    <ul class="note">
      <li class="note__col">
        <template  v-for="hour in hours">
          <p
            class="note__cell note__cell--time"
            v-for="minute in minutes"
          >
            {{hour}}:{{padZero(minute)}}
          </p>
        </template>
      </li>
      <li class="note__col">
        <template  v-for="hour in hours">
          <p
            class="note__cell"
            :class="{ 'is-active': matchedData({ hour, minute, type: 'direct' }) }"
            v-for="minute in minutes"
            @click.prevent="filteredOnClickCell({ hour, minute, type: 'direct' })"
          >
            {{getValue({ hour, minute, type: 'direct' })}}
          </p>
        </template>
      </li>
      <li class="note__col">
        <template  v-for="hour in hours">
          <p
            class="note__cell"
            :class="{ 'is-active': matchedData({ hour, minute, type: 'stacked' }) }"
            v-for="minute in minutes"
            @click.prevent="filteredOnClickCell({ hour, minute, type: 'stacked' })"
          >
            {{getValue({ hour, minute, type: 'stacked' })}}
          </p>
        </template>
      </li>
      <li class="note__col">
        <template  v-for="hour in hours">
          <p
            class="note__cell"
            :class="{ 'is-active': matchedData({ hour, minute, type: 'milk' }) }"
            v-for="minute in minutes"
            @click.prevent="filteredOnClickCell({ hour, minute, type: 'milk' })"
          >
            {{getValue({ hour, minute, type: 'milk' })}}
          </p>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    props: {
      onClickCell: Function,
    },
    data: () => ({
      activeData: null,
      hours: [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5],
      minutes: [0,15,30,45],
    }),
    computed: mapState({
      dateStr: state => state.store.dateStr,
      notes: state => state.store.notes,
    }),
    methods: {
      filteredOnClickCell(data) {
        this.activeData = data;
        if (typeof this.onClickCell === 'function') this.onClickCell(data);
      },
      padZero(num) {
        return num.toString().length === 1 ? `${num}0` : num;
      },
      matchedData(data) {
        if (!this.activeData) return false;
        return data.hour === this.activeData.hour &&
          data.minute === this.activeData.minute &&
          data.type === this.activeData.type;
      },
      getValue({ hour,minute, type }) {
        try {
          const value = this.notes[this.dateStr][hour][minute][type];
          return value || 0;
        } catch (e) {}
        return 0;
      },
    }
  }
</script>

<style lang="scss" scoped>
  .note {
    display: flex;
    width: 100%;
    &__col {
      width: 25%;
      & + & {
        border-left: solid 1px var(--COLOR_BORDER);
      }
    }
    &__cell {
      height: 50px;
      padding: 0 10px;
      font-size: 1.2rem;
      text-align: right;
      line-height: 50px;
      & + & {
        border-top: solid 1px var(--COLOR_BORDER);
      }
      &--time {
        background-color: #f5f5f5;
        font-size: 1rem;
      }
      &.is-active {
        background-color: #ffffcc;
      }
    }
  }
</style>
