<template>
  <section id="nuxt-content">
    <NavBar :ingame="isInGame"/>
    <main>
      <nuxt/>
    </main>
  </section>
</template>

<script>
  import NavBar from '~/components/NavBar.vue'

  export default {
    computed: {
      isInGame () {
        return this.$route.name === 'game' && !!Object.keys(this.$route.query).length > 0
      }
    },
    components: {
      NavBar
    }
  }
</script>

<style>
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    height: 100%;
  }

  body {
    height: 100%;
  }

  #__nuxt, #nuxt-content {
    height: 100%;
    position: relative;
  }

  main {
    height: 100%;
    margin-top: -56px;
    padding-top: 56px;
  }
</style>
