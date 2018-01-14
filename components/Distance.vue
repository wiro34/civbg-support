<template>
  <div class="distance">
    <b-row>
      <b-col cols="5" class="distance-label">移動</b-col>
      <b-col cols="4" class="distance-value">{{player.distance}}マス</b-col>
      <b-col cols="3">
        <b-form-select v-model="additionalDistance" :options="additionOptions" size="sm"></b-form-select>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { UPDATE_ADDITIONAL_DISTANCE } from '~/store/action-types'

  export default {
    data () {
      return {
        additionOptions: [
          {value: 0, text: ''},
          {value: 1, text: '+1　ヘンリー・フォード'},
        ]
      }
    },
    computed: {
      additionalDistance: {
        get () {
          return this.player.additionalDistance
        },
        set (additionalDistance) {
          this.updateAdditionalDistance({player: this.player, additionalDistance})
        }
      }
    },
    methods: {
      ...mapActions({
        updateAdditionalDistance: UPDATE_ADDITIONAL_DISTANCE
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
  .distance
    width: 12rem

  .row
    margin: 0

  .col, .col-3, .col-4, .col-5, .col-6
    padding: 0

  .distance-label
    font-size: 1rem
    font-weight: bold
    text-align: right
    margin-top: .3rem

  .distance-value
    margin-top: .3rem
    padding: 0 5px
</style>
