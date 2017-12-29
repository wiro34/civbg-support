<template>
  <b-navbar toggleable="md" type="dark" variant="success" :sticky="true">
    <b-navbar-brand href="/">CivBG Support</b-navbar-brand>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-collapse is-nav id="nav_collapse" v-if="ingame">
      <b-navbar-nav>
        <b-nav-item @click="toggleTeslaMode">テスラの効果を切り替える [{{teslaMode ? 'ON' : 'OFF'}}]</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="showQRCode">QRを表示</b-nav-item>
      </b-navbar-nav>
    </b-collapse>

    <b-modal id="qrModal" ref="qrModal" title="QR コード" :ok-only="true" ok-title="閉じる" :centered="true">
      <div class="d-block text-center">
        <canvas ref="qr"></canvas>
      </div>
    </b-modal>
  </b-navbar>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import { ENABLE_TESLA_MODE, DISABLE_TESLA_MODE } from '~/store/mutation-types'
  import QRious from 'qrious'

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
        let qr = new QRious({element: this.$refs.qr})
        qr.value = location.href
        qr.size = 300
        this.$refs.qrModal.show()
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
