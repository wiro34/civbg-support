<template>
  <b-modal :id="id" title="ゲームの開始" ok-title="開始" cancel-title="キャンセル" centered
           :ok-disabled="isReady" @ok="handleOk">
    <p>プレイヤーの色を選んでください。</p>

    <b-form-group label="1st" label-for="first-color" :label-cols="1" horizontal>
      <b-form-select id="first-color" v-model="selectedColors[0]" :options="restColorsFor(0)"/>
    </b-form-group>

    <b-form-group label="2nd" label-for="second-color" :label-cols="1" horizontal>
      <b-form-select id="second-color" v-model="selectedColors[1]" :options="restColorsFor(1)"/>
    </b-form-group>

    <b-form-group label="3rd" label-for="third-color" :label-cols="1" horizontal>
      <b-form-select id="third-color" v-model="selectedColors[2]" :options="restColorsFor(2)"/>
    </b-form-group>

    <b-form-group label="4th" label-for="fourth-color" :label-cols="1" horizontal>
      <b-form-select id="fourth-color" v-model="selectedColors[3]" :options="restColorsFor(3)"/>
    </b-form-group>

    <b-form-group label="5th" label-for="fifth-color" :label-cols="1" horizontal>
      <b-form-select id="fifth-color" v-model="selectedColors[4]" :options="restColorsFor(4)"/>
    </b-form-group>
  </b-modal>
</template>

<script>
  import { mapState } from 'vuex'

  const COLORS = ['RED', 'GREEN', 'BLUE', 'YELLOW', 'PURPLE']

  export default {
    created () {
      if (this.players.length > 0) {
        this.selectedColors = this.players.map(player => player.color)
      }
    },
    data () {
      return {
        selectedColors: [],
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
        return ['', ...COLORS.filter((c) => selected.indexOf(c) === -1 || c === this.selectedColors[user])]
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
