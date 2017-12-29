module.exports = {
  head: {
    title: 'CivBG Support',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Civilization Board Game tech-tree support'}
    ],
    link: []
  },
  loading: {color: '#3B8070'},
  router: {
    base: '/civbg-support'
  },
  build: {
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['bootstrap-vue', 'firebase', 'vuexfire']
  },
  plugins: ['~plugins/bootstrap-vue', '~plugins/firebase']
}
