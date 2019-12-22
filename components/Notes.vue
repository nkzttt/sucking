<template>
  <table class="note">
    <tbody>
    <tr>
      <td>9</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>10</td>
      <td>0</td>
      <td>10</td>
      <td>0</td>
    </tr>
    <tr>
      <td>11</td>
      <td>10</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>12</td>
      <td>10</td>
      <td>0</td>
      <td>0</td>
    </tr>
    </tbody>
  </table>
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
