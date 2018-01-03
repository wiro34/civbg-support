<template>
  <div class="stack-info">
    <div class="stack-count">stack:{{player.stack}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      player: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .stack-info
    text-align: center
</style>