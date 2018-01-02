<template>
  <b-modal :id="id" title="ゲームの開始" ok-title="開始" cancel-title="キャンセル" centered
           :ok-disabled="isReady" @ok="handleOk">
    <p>プレイヤーの色を選んでください。</p>

    <b-form-group v-for="i in 5" :key="i" :label-cols="1" horizontal>
      <b-form-select v-model="selectedColors[i - 1]" :options="restColorsFor(i - 1)">
        <template slot="first">
          <option :value="null" disabled>-- {{i}}人目 --</option>
        </template>
      </b-form-select>
    </b-form-group>
  </b-modal>
</template>

<script>
  import { mapState } from 'vuex'

  const COLORS = ['RED', 'GREEN', 'BLUE', 'YELLOW', 'PURPLE']

  export default {
    created () {
      if (this.players.length > 0) {
        this.selectedColors = [
          ...this.players.map(player => player.color),
          ...new Array(5 - this.players.length).fill(null)
        ]
      }
    },
    data () {
      return {
        selectedColors: new Array(5).fill(null),
        hoge: true
      }
    },
    computed: {
      isReady () {
        return Object.values(this.selectedColors).filter(c => c !== '').length < 2
      },

      ...mapState([
        'players'
      ])
    },
    methods: {
      restColorsFor (user) {
        const selected = this.selectedColors.filter(c => c !== '')
        return [...COLORS.filter((c) => selected.indexOf(c) === -1 || c === this.selectedColors[user])]
      },
      handleOk () {
        this.$emit('ok', this.selectedColors.filter(c => c))
      },
    },
    props: {
      id: {
        type: String,
        required: true
      },
    }
  }
</script>
