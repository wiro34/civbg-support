<template>
  <b-modal id="qrModal" title="QR コード" :ok-only="true" ok-title="閉じる" :centered="true" @shown="generateQRCode">
    <div class="d-block text-center">
      <canvas ref="qr"></canvas>
    </div>
  </b-modal>
</template>

<script>
  import QRious from 'qrious'

  export default {
    methods: {
      generateQRCode () {
        const qr = new QRious({element: this.$refs.qr})
        qr.value = location.href
        qr.size = 250
      }
    }
  }
</script>
