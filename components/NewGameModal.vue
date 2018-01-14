<template>
  <b-modal :id="id" title="ゲームの開始" ok-title="開始" cancel-title="キャンセル" centered
           :ok-disabled="!isReady" @ok="handleOk">
    <p>プレイヤーの文明とカラーを選んでください。</p>

    <b-form-group v-for="i in 5" :key="i" :label-cols="2" :label="`${i}人目`" horizontal>
      <b-form-row>
        <b-col>
          <b-form-select v-model="civilizations[i - 1]" :options="restCivilizationsFor(i - 1)">
            <template slot="first">
              <option :value="null" :disabled="i <= 2">---</option>
            </template>
          </b-form-select>
        </b-col>

        <b-col>
          <b-form-select v-model="colors[i - 1]" :options="restColorsFor(i - 1)">
            <template slot="first">
              <option :value="null" :disabled="i <= 2">---</option>
            </template>
          </b-form-select>
        </b-col>
      </b-form-row>
    </b-form-group>
  </b-modal>
</template>

<script>
  import { mapState } from 'vuex'
  import { CIVILIZATIONS } from '~/models/civilizations'

  const COLORS = ['RED', 'GREEN', 'BLUE', 'YELLOW', 'PURPLE'].map(c => ({id: c, name: c}))

  export default {
    created () {
      if (this.players.length > 0) {
        this.civilizations = [
          ...this.players.map(player => player.civilization),
          ...new Array(5 - this.players.length).fill(null)
        ]
        this.colors = [
          ...this.players.map(player => player.color),
          ...new Array(5 - this.players.length).fill(null)
        ]
      }
    },
    data () {
      return {
        civilizations: new Array(5).fill(null),
        colors: new Array(5).fill(null),
      }
    },
    computed: {
      validCivilizations () {
        return this.civilizations.filter(this.isValid)
      },
      validColors () {
        return this.colors.filter(this.isValid)
      },
      isReady () {
        return this.validCivilizations.length === this.validColors.length &&
          this.civilizations.filter((c, i) => this.isValid(c) && this.isValid(this.colors[i])).length >= 2
      },

      ...mapState([
        'players'
      ])
    },
    methods: {
      isValid (c) {
        return c && c !== ''
      },
      restCivilizationsFor (user) {
        return this.restItems(user, CIVILIZATIONS, this.civilizations)
      },
      restColorsFor (user) {
        return this.restItems(user, COLORS, this.colors)
      },
      restItems (user, all, selected) {
        const selectedItems = selected.filter(this.isValid)
        return [
          ...all
            .map(c => ({value: c.id, text: c.name}))
            .filter((c) => selectedItems.indexOf(c.value) === -1 || c.value === selected[user])]
      },
      handleOk () {
        this.$emit('ok', this.validCivilizations.map((c, i) => ({
          civilization: c,
          color: this.validColors[i]
        })))
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
