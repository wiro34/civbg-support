<template>
  <div class="stack-info">
    <b-row>
      <b-col cols="5" class="stack-label">スタック</b-col>
      <b-col>{{player.stack}}個</b-col>
    </b-row>
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
    width: 12rem

  .stack-label
    text-align: right
    font-weight: bold

  .row
    margin: 0
  .col-5
    padding: 0
  .col
    padding: 0 8px
</style>
