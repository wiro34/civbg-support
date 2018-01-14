<template>
  <div class="stack-info">
    <b-row>
      <b-col cols="5" class="stack-label">スタック</b-col>
      <b-col cols="4" class="stack-value">{{player.stack}}個</b-col>
      <b-col cols="3">
        <b-form-select v-model="additionalStack" :options="additionOptions" size="sm"></b-form-select>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { UPDATE_ADDITIONAL_STACK } from '~/store/action-types'

  export default {
    data () {
      return {
        additionOptions: [
          {value: 0, text: ''},
          {value: 1, text: '+1　ルイ・パスツール'},
        ]
      }
    },
    computed: {
      additionalStack: {
        get () {
          return this.player.additionalStack
        },
        set (additionalStack) {
          this.updateAdditionalStack({player: this.player, additionalStack})
        }
      }
    },
    methods: {
      ...mapActions({
        updateAdditionalStack: UPDATE_ADDITIONAL_STACK
      })
    },
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

  .row
    margin: 0

  .col, .col-3, .col-4, .col-5, .col-6
    padding: 0

  .stack-label
    font-size: 1rem
    font-weight: bold
    text-align: right
    margin-top: .3rem

  .stack-value
    margin-top: .3rem
    padding: 0 5px
</style>
