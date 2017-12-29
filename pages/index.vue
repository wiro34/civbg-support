<template>
  <section class="container">
    <div>
      <h1 class="title">
        CivBG Support
      </h1>
      <h2 class="subtitle">
        manage players' tech-tree
      </h2>
      <div class="buttons">
        <b-button size="lg" variant="primary" v-b-modal.newGameModal>
          ゲームを開始する
        </b-button>
      </div>
    </div>

    <new-game-modal id="newGameModal" @ok="handleOk"></new-game-modal>
  </section>
</template>

<script>
  import NewGameModal from '~/components/NewGameModal.vue'
  import { mapActions } from 'vuex'
  import { START_GAME } from '~/store/action-types'

  export default {
    methods: {
      async handleOk (colors) {
        const gameId = await this.startGame(colors)
        this.$router.push(`game/?${gameId}`)
      },
      ...mapActions({
        startGame: START_GAME
      })
    },
    components: {
      NewGameModal
    },
  }
</script>

<style>
  .container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 8rem;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 2rem;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .buttons {
    padding-top: 15px;
  }
</style>