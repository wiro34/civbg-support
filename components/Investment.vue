<template>
  <div class="investment">
    <h4 class="mb-0">投資</h4>
    <b-row v-for="investment in INVESTMENTS" :key="investment.id">
      <b-col cols="5" class="investment-label">{{investment.name}}</b-col>
      <b-col cols="3" class="investment-count">{{player.investment[investment.id]}}個</b-col>
      <b-col>
        <b-button-group size="sm">
          <b-button variant="success" @click="increment({player, investment: investment.id})">&plus;</b-button>
          <b-button variant="danger" @click="decrement({player, investment: investment.id})">&minus;</b-button>
        </b-button-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { INCREMENT_INVESTMENT, DECREMENT_INVESTMENT } from '~/store/action-types'

  const INVESTMENTS = [
    {id: 'military', name: '軍産複合体'},
    {id: 'art', name: '芸術基金'},
    {id: 'education', name: '学校教育'},
    {id: 'infrastructure', name: '社会資本'},
  ]

  export default {
    data () {
      return {
        INVESTMENTS
      }
    },
    computed: {
      investments () {
        return this.player.investment || {}
      }
    },
    methods: {
      ...mapActions({
        increment: INCREMENT_INVESTMENT,
        decrement: DECREMENT_INVESTMENT
      })
    },
    props: {
      player: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .investment
    width: 12rem

  h4
    font-size: 1rem
    font-weight: bold
    text-align: center

  .row
    margin: 2px 0

  .col, .col-3, .col-4, .col-5, .col-6
    padding: 0

  .investment-label, .investment-count
    margin-top: .3rem

  .investment-label
    text-align: right

  .investment-count
    padding: 0 8px
</style>
