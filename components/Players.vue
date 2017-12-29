<template>
  <div class="players">
    <div v-for="player in players" class="player-view" :class="player.color">
      <span class="player-badge" :class="player.color">{{player.color}}</span>
      <arms-info :player="player"/>
      <tech-tree :player="player"/>
    </div>
  </div>
</template>

<script>
  import ArmsInfo from '~/components/ArmsInfo.vue'
  import TechTree from '~/components/TechTree.vue'
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState([
        'players'
      ])
    },
    components: {
      ArmsInfo,
      TechTree
    }
  }
</script>

<style lang="stylus" scoped>
  .players
    height: 100%
    position: relative

  .player-view
    float: left
    width: 50%
    height: 50%
    border: solid 1px #dddddd
    position: relative
    background: #eee
    @media screen and (max-width: 1024px)
      height: 100%
    @media screen and (max-width: 767px)
      width: 100%

  .player-badge
    display: inline-block
    width: 80px
    height: 20px
    border-radius: 5px
    text-align: center
    font-weight: bold
    margin: 5px
    font-size: 0.8rem
    position: absolute

  &.RED
    background-color: #FFE6E6

  .player-badge.RED
    background-color: #FF9FAB

  &.GREEN
    background-color: #CCEBD6

  .player-badge.GREEN
    background-color: #4ED662

  &.BLUE
    background-color: #D6EBFF

  .player-badge.BLUE
    background-color: #6C9FFF

  &.YELLOW
    background-color: #FFFFCC

  .player-badge.YELLOW
    background-color: #FFFD69

  &.PURPLE
    background-color: #F5CCFF

  .player-badge.PURPLE
    background-color: #EC9BF1

  .arms-info
    position: absolute
    right: 10px
    top: 10px
    z-index: 100

  .tech-tree
    padding-top: 50px
</style>
