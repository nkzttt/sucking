<template>
  <div class="container">
    <div class="header">
      <total :count="3" :value="10" />
      <ul class="items">
        <li class="items__title"></li>
        <li class="items__title">授乳</li>
        <li class="items__title">搾乳</li>
        <li class="items__title">ミルク</li>
      </ul>
    </div>
    <div class="main">
      <notes />
    </div>
    <actions :on-click="onClick" />
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
    onClick: () => alert('hello')
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
