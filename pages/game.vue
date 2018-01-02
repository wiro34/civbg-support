<template>
  <section class="game-container">
    <players/>
    <q-r-modal></q-r-modal>
  </section>
</template>

<script>
  import Players from '~/components/Players.vue'
  import QRModal from '~/components/QRModal.vue'
  import { mapActions } from 'vuex'
  import { LOAD_GAME } from '~/store/action-types'

  export default {
    async created () {
      const key = Object.keys(this.$route.query)[0]
      const loaded = key && key.length > 0 && await this.loadGame(key)
      if (!loaded) {
        this.$router.replace('/')
      }
    },
    methods: {
      ...mapActions({
        loadGame: LOAD_GAME
      })
    },
    components: {
      Players,
      QRModal
    }
  }
</script>

<style>
  .game-container {
    height: 100%;
  }
</style>
