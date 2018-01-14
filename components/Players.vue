<template>
  <div class="players">
    <div v-for="player in players" class="player-view" :class="player.color">
      <span class="player-badge"
            :class="player.color">{{getCivilizationName(player.civilization)}}</span>
      <tech-tree :player="player"/>
      <arms-info :player="player"/>
      <distance :player="player"/>
      <stack-info :player="player"/>
      <investment :player="player"/>
    </div>
  </div>
</template>

<script>
  import ArmsInfo from '~/components/ArmsInfo.vue'
  import TechTree from '~/components/TechTree.vue'
  import Distance from '~/components/Distance.vue'
  import StackInfo from '~/components/StackInfo.vue'
  import Investment from '~/components/Investment.vue'
  import { mapState } from 'vuex'
  import { findCivById } from '~/models/civilizations'

  export default {
    computed: {
      ...mapState([
        'players'
      ])
    },
    methods: {
      getCivilizationName (civilization) {
        return findCivById(civilization).name
      }
    },
    components: {
      ArmsInfo,
      TechTree,
      Distance,
      StackInfo,
      Investment
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
    width: 120px
    height: 1.5rem
    border-radius: 5px
    text-align: center
    font-weight: bold
    margin: 5px
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
    right: 5px
    top: 5px

  .distance
    position: absolute
    right: 15px
    top: 70px

  .stack-info
    position: absolute
    right: 15px
    top: 100px

  .tech-tree
    padding-top: 50px
    padding-right: 100px
    @media screen and (orientation: portrait)
      padding-top: 200px
      padding-right: 50px

  .investment
    position: absolute
    right: 5px
    top: 130px
</style>
