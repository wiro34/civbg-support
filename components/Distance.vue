<template>
  <div class="distance">
    <b-form-group :label-cols="3" label="移動" class="mb-0" label-class="mb-0" horizontal>
      <b-form-row>
        <b-col>
          <span class="base">{{baseDistance}}</span>
        </b-col>
        <b-col>
          <b-form-select v-model="additionalDistance" :options="additionOptions" size="sm"></b-form-select>
        </b-col>
      </b-form-row>
    </b-form-group>
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
      baseDistance () {
        return `${this.player.distance || 2}マス`
      },
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

<style lang="stylus">
  .distance
    width: 10rem
    text-align: center

    .base
      display: inline-block
      margin-top: .2rem

    .col
      padding: 0

    .col-form-legend
      font-size: 1rem
      font-weight: bold
      margin-top: .2rem

    select
      line-height: 1
</style>
