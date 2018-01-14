import { findCivById } from './civilizations'
import { findTechById } from './tech'

export default class Player {
  constructor (player) {
    const civ = findCivById(player.civilization)
    this.color = player.color
    this.civilization = player.civilization
    this.arms = Player._calcArmsRank({})
    this.tree = {first: [civ.beginningTech]}
    this.distance = civ.distance
    this.additionalDistance = 0
    this.stack = civ.stack
  }

  static addTech (player, level, techId) {
    player.tree = {first: [], second: [], third: [], fourth: [], ...player.tree}
    player.tree[level].push(techId)
    Player._updateArmsAndDistance(player)
  }

  static removeTech (player, techId) {
    if (player.tree) {
      Object.keys(player.tree).forEach(level => {
        player.tree[level] = player.tree[level].filter(id => id !== techId)
      })
      Player._updateArmsAndDistance(player)
    }
  }

  static _updateArmsAndDistance (player) {
    player.arms = Player._calcArmsRank(player)
    player.distance = Player._calcDistance(player)
    player.stack = Player._calcStackCount(player)
  }

  static _calcArmsRank (player) {
    const tree = Player._flattenTree(player)
    return tree.map(findTechById)
      .filter(tech => tech.arms)
      .reduce((arms, tech) => {
        Object.keys(tech.arms).forEach(key => {
          arms[key] = Math.max(arms[key], tech.arms[key])
        })
        return arms
      }, {sword: 1, cannon: 1, cavalry: 1, airforce: 0})
  }

  static _calcDistance (player) {
    const civ = findCivById(player.civilization)
    const tree = Player._flattenTree(player)
    return tree.map(findTechById)
      .filter(tech => tech.distance)
      .reduce((distance, tech) => Math.max(distance, tech.distance), civ.distance)
  }

  static _calcStackCount (player) {
    const civ = findCivById(player.civilization)
    const tree = Player._flattenTree(player)
    return Math.max.apply(null, tree.map(techId => findTechById(techId).stack).concat(civ.stack))
  }

  static _flattenTree (player) {
    const tree = player.tree ? player.tree : {}
    return [].concat(tree.first || [], tree.second || [], tree.third || [], tree.fourth || [])
  }
}
