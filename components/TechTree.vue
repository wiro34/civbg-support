<template>
  <div class="tech-tree" :class="`tech-level1-${count('first')}`">
    <ul v-for="level in TECH_LEVELS" class="tech-row" :class="`tech-${level}`">
      <li class="tech-row-spacer"/>
      <li v-for="techId in tree[level]" class="tech-list-item">
        <a class="remove" @click="removeTech({player, techId})">&times;</a>
        <span class="tech-list-item-label">{{techName(techId)}}</span>
      </li>

      <li class="tech-list-item append-tech" v-if="isAddable(level)">
        <b-select v-model="selectedTech" :options="selectableTechs(level)" @change="handleChange(level, $event)">
          <template slot="first">
            <option value="" selected>&#45;&#45;&#45;&#45;</option>
          </template>
        </b-select>
      </li>
    </ul>
  </div>
</template>

<script>
  import { TECHS, NEWTON, findTechById } from '~/store/tech'
  import { mapState, mapActions } from 'vuex'
  import { ADD_TECH, REMOVE_TECH } from '~/store/action-types'

  const TECH_LEVELS = ['first', 'second', 'third', 'fourth']

  export default {
    data () {
      return {
        TECH_LEVELS,
        selectedTech: ''
      }
    },
    computed: {
      tree () {
        return {first: [], second: [], third: [], fourth: [], ...this.player.tree}
      },
      ...mapState([
        'newtonUsed',
        'teslaMode',
      ])
    },
    methods: {
      count (level) {
        return this.tree[level].length
      },
      isAddable (level) {
        const index = TECH_LEVELS.indexOf(level)
        if (index > 0) {
          const prevLevel = TECH_LEVELS[index - 1]
          return this.count(level) < this.count(prevLevel) - 1
        }
        return true
      },
      remainingTechs (level) {
        const learned = Object.values(this.tree).reduce((mem, techs) => mem.concat(techs), [])
        return TECHS
          .filter(tech => tech.level === level && !learned.includes(tech.id))
          .map(tech => ({text: tech.name, value: tech.id}))
      },
      selectableTechs (level) {
        const techs = this.remainingTechs(level)
        if (level === 'first' && this.count('first') === 0) {
          techs.push(...this.remainingTechs('second'))
        }
        if (!this.newtonUsed) {
          techs.push({text: findTechById(NEWTON).name, value: NEWTON})
        }
        if (this.teslaMode) {
          const index = TECH_LEVELS.indexOf(level)
          if (index >= 0 && index < 3) {
            const nextLevel = TECH_LEVELS[index + 1]
            techs.push(...this.remainingTechs(nextLevel))
          }
        }
        return techs
      },
      techName (techId) {
        return (TECHS.find(tech => tech.id === techId) || {}).name
      },
      handleChange (level, techId) {
        if (techId && techId.length > 0) {
          this.addTech({player: this.player, level, techId})
          this.resetSelection()
        }
      },
      resetSelection () {
        this.$nextTick(() => { this.selectedTech = '' })
      },
      ...mapActions({
        addTech: ADD_TECH,
        removeTech: REMOVE_TECH,
      })
    },
    props: {
      player: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="stylus" scoped>
  item-width = 15%

  .tech-tree
    width: 100%
    height: 100%
    display: flex
    flex-direction: column-reverse

    .tech-row
      height: 25%
      display: flex
      position: relative
      margin: 0
      margin-bottom: 1px
      padding: 0
      overflow: hidden
      list-style: none

    .tech-list-item
      width: item-width
      height: 100%
      border: solid 2px #66512c
      border-radius: 5px
      box-sizing: border-box
      background-color: white
      font-size: 1.3rem
      overflow: hidden
      position: relative
      display: flex
      justify-content: center
      align-items: center

      @media screen and (max-width: 1024px)
        font-size: 1rem

      .remove
        position: absolute
        top: 2px
        right: 2px
        color: #c23c3f
        display: none
        cursor: pointer
        font-weight: bold
        padding: .5rem
        line-height: 1rem
        @media screen and (max-width: 1024px)
          display: block

      &:hover .remove
        display: block

    .tech-list-item-label
      color: #333
      text-align: center

    .tech-list-item-wrapper
      width: 100%
      height: 100%
      text-align: center

    .append-tech
      overflow: visible
      border: dotted 2px rgba(217, 174, 32, 0.65)

      select
        appearance: none
        width: 100%
        height: 100%
        border-radius: 5px
        text-align: center
        font-size: 1.5rem

    .tech-second .tech-row-spacer
      width: item-width * .5

    .tech-third .tech-row-spacer
      width: item-width

    .tech-fourth .tech-row-spacer
      width: item-width * 1.5

  for count in 6 .. 13
    .tech-level1-{count}
      item-width = 15% - (count - 6 + 2)

      .tech-list-item
        width: item-width
        if count > 8
          font-size: 1.2rem

      .tech-second .tech-row-spacer
        width: item-width * .5

      .tech-third .tech-row-spacer
        width: item-width

      .tech-fourth .tech-row-spacer
        width: item-width * 1.5
</style>
