<template>
  <div class="arms-info">
    <div v-for="type in ARMS_ORDER" class="arms-wrapper">
      <arm-info :type="type" :rank="player.arms[type]"/>
    </div>
  </div>
</template>

<script>
  import ArmInfo from '~/components/ArmInfo.vue'

  const ARMS_ORDER = ['sword', 'cannon', 'cavalry', 'airforce']

  export default {
    data () {
      return {
        ARMS_ORDER
      }
    },
    props: {
      player: {
        type: Object,
        required: true
      }
    },
    components: {
      ArmInfo
    }
  }
</script>

<style lang="stylus" scoped>
  .arms-info .arms-wrapper
    text-align: center
    float: left
    margin: 0 .5rem
</style>
