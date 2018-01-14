import { NEWTON } from './tech'

export function isNewtonUsed (players) {
  return players.some(player => {
    return Object.values(player.tree || {}).some(techs => techs.includes(NEWTON))
  })
}
