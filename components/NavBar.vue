<template>
  <b-navbar toggleable="md" type="dark" variant="success" fixed="top">
    <b-navbar-brand :to="{name: 'index'}">CivBG Support</b-navbar-brand>

    <!-- if using v-if, error occurred: @see https://github.com/nuxt/nuxt.js/issues/1214 -->
    <b-navbar-toggle target="nav_collapse" :class="{'hidden-on-top': !ingame}"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse" :class="{'hidden-on-top': !ingame}">
      <b-navbar-nav>
        <b-nav-item @click="toggleTeslaMode">テスラの効果を切り替える [{{teslaMode ? 'ON' : 'OFF'}}]</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="showQRCode">QRを表示</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import { ENABLE_TESLA_MODE, DISABLE_TESLA_MODE } from '~/store/mutation-types'

  export default {
    computed: {
      ...mapState([
        'teslaMode',
      ])
    },
    methods: {
      toggleTeslaMode () {
        if (this.teslaMode) {
          this.disableTeslaMode()
        } else {
          this.enableTeslaMode()
        }
      },
      showQRCode () {
        this.$root.$emit('bv::show::modal', 'qrModal')
      },

      ...mapMutations({
        enableTeslaMode: ENABLE_TESLA_MODE,
        disableTeslaMode: DISABLE_TESLA_MODE
      })
    },
    props: {
      ingame: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style>
  .hidden-on-top,
  .navbar-expand-md .navbar-collapse.hidden-on-top {
    display: none !important;
  }
</style>
