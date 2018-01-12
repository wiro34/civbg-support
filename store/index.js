import { firebaseMutations, firebaseAction } from 'vuexfire'
import { getFirstTech, calcArmsRank, isNewtonUsed } from './functions'
import db from '~/plugins/firebase'
import { SET_GAME_ID, SET_NEWTON_USED, ENABLE_TESLA_MODE, DISABLE_TESLA_MODE } from './mutation-types'
import { START_GAME, LOAD_GAME, ADD_TECH, REMOVE_TECH, SET_PLAYERS_REF } from './action-types'

const gamesRef = db.ref('games')

export const state = () => ({
  gameId: null,
  players: [],
  newtonUsed: false,
  teslaMode: false,
})

export const mutations = {
  [SET_GAME_ID] (state, gameId) {
    state.gameId = gameId
  },

  [SET_NEWTON_USED] (state) {
    state.newtonUsed = isNewtonUsed(state.players)
  },

  [ENABLE_TESLA_MODE] (state) {
    state.teslaMode = true
  },

  [DISABLE_TESLA_MODE] (state) {
    state.teslaMode = false
  },

  ...firebaseMutations
}

export const actions = {
  async [START_GAME] ({commit, dispatch}, players) {
    const gameRef = gamesRef.push()
    const playersRef = gameRef.child('players')
    playersRef.set([])
    players.forEach(player => {
      player.arms = calcArmsRank(player)
      player.tree = {first: [getFirstTech(player)]}
      playersRef.push(player)
    })
    commit(SET_GAME_ID, gameRef.key)
    return gameRef.key
  },

  async [LOAD_GAME] ({commit, dispatch}, gameKey) {
    const gameRef = gamesRef.child(gameKey)
    const gameSnapshot = await gameRef.once('value')
    const game = gameSnapshot.val()
    if (game && ('players' in game)) {
      commit(SET_GAME_ID, gameRef.key)
      dispatch(SET_PLAYERS_REF, gameRef.child('players'))
      return true
    }
    return false
  },

  async [ADD_TECH] ({state, commit}, {player, level, techId}) {
    const playersRef = gamesRef.child(state.gameId).child('players')
    await playersRef.child(player['.key']).transaction((p) => {
      if (p) {
        p.tree = {first: [], second: [], third: [], fourth: [], ...p.tree}
        p.tree[level].push(techId)
        p.arms = calcArmsRank(p)
      }
      return p
    })
    commit(SET_NEWTON_USED)
    commit(DISABLE_TESLA_MODE)
  },

  [REMOVE_TECH] ({state, commit}, {player, techId}) {
    const playersRef = gamesRef.child(state.gameId).child('players')
    playersRef.child(player['.key']).transaction((p) => {
      if (p && p.tree) {
        Object.keys(p.tree).forEach(level => {
          p.tree[level] = p.tree[level].filter(id => id !== techId)
        })
        p.arms = calcArmsRank(p)
      }
      return p
    })
    commit(SET_NEWTON_USED)
    commit(DISABLE_TESLA_MODE)
  },

  [SET_PLAYERS_REF]: firebaseAction(({bindFirebaseRef, commit}, playersRef) => {
    bindFirebaseRef('players', playersRef, {
      readyCallback: () => commit(SET_NEWTON_USED),
      wait: true
    })
  }),
}
