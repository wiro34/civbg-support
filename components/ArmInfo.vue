<template>
  <div class="arm-info" :class="type">
    <div class="arms-type-icon">{{label}}</div>
    <div class="arms-rank-icon-container">
      <span class="arms-rank-icon" :class="`rank${rank}`"></span>
    </div>
  </div>
</template>

<script>
  const TYPES = {
    sword: {label: '歩'},
    cannon: {label: '砲'},
    cavalry: {label: '騎'},
    airforce: {label: '飛'},
  }

  export default {
    computed: {
      label () {
        return TYPES[this.type].label
      }
    },
    props: {
      type: {
        type: String,
        required: true,
        validator (value) {
          return Object.keys(TYPES).includes(value)
        }
      },
      rank: {
        type: Number,
        required: true,
        validator (value) {
          return value >= 0 && value <= 4
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  size = 2rem

  .arm-info
    width: size

  .arms-type-icon
    width: size
    height: size
    line-height: size
    color: #eeeeee
    font-weight: bold
    text-align: center
    border-radius: 5px
    margin-bottom: 1px
    font-size: size - 0.2rem

  .arms-rank-icon-container
    width: size
    height: size
    background: #fff
    border-radius: 5px
    border: solid 1px #ccc
    display: flex
    justify-content: center
    align-items: center
    text-align: center

  .arms-rank-icon
    display: block
    width: 25px
    height: 25px
    background-image: url('~/assets/arms-icons.png')
    background-repeat: no-repeat
    background-position: 0 0

  for i in 1 .. 4
    .arms-rank-icon.rank{i}
      background-position-x: (i - 1) * -25px

  .sword .arms-type-icon
    background-color: #ff4232

  .cannon .arms-type-icon
    background-color: #04ba37

  .cavalry .arms-type-icon
    background-color: #2364ff

  .airforce
    .arms-type-icon
      background-color: #d847ff
    .arms-rank-icon.rank0
      background: none
    .arms-rank-icon.rank1
      background-position-x: 4 * -25px
</style>
