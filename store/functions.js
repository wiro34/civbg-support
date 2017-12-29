import { NEWTON, findTechById } from './tech'

export function calcArmsRank (player) {
  const tree = player.tree ? player.tree : {}
  return [tree.first || [], tree.second || [], tree.third || [], tree.fourth || []]
    .reduce((arms, techIds) => {
      techIds.map(findTechById).filter(tech => tech.arms).forEach((tech) => {
        Object.keys(tech.arms).forEach(key => {
          arms[key] = Math.max(arms[key], tech.arms[key])
        })
      })
      return arms
    }, {sword: 1, cannon: 1, cavalry: 1, airforce: 0})
}

export function isNewtonUsed (players) {
  return players.some(player => {
    return Object.values(player.tree || {}).some(techs => techs.includes(NEWTON))
  })
}
