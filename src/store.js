import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields'

const shamir = require('secrets.js-grempe') // sharmir secret sharing algorithm

function atoh (ascii) {
  return ascii.split('').map(c => c.charCodeAt(0).toString(16)).join('')
}

function htoa (hex) {
  const arr = []
  for (let i = 0; i < hex.length; i += 2) {
    arr.push(String.fromCharCode(parseInt(hex.slice(i, i + 2), 16)))
  }
  return arr.join('')
}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    threshold: 3,
    parts: 5,
    secret: 'foobar',
    pieces: ['', '', '']
      .map(x => ({ value: x }))
      // entered by the user (recombination attempt)
  },
  getters: {
    getField,
    shares: state => {
      const hSecret = atoh(state.secret)
      const parts = Math.max(2, +state.parts)
      const threshold = Math.max(parts, +state.threshold)
      console.log('parts %d, threshold %d', parts, threshold)
      console.log('secret %s => %s', state.secret, hSecret)
      return shamir.share(hSecret, parts, threshold)
    },
    result: state => {
      const validPieces = state.pieces
        .map(p => p.value)
        .filter(p => {
          if (typeof p !== 'string') return false
          if (!p.startsWith('80')) return false
          const i = parseInt(p.slice(2, 2), 16)
          if (i < 0 || i > 100) return false
          return true
        })
      return htoa(shamir.combine(validPieces))
    }
  },
  mutations: {
    updateField,
    setThreshold (state, value) {
      state.threshold = +value
      const delta = state.threshold - state.pieces.length
      if (delta > 0) {
        state.pieces.concat([...Array(delta).keys()].map(() => (state.pieces.push({ 'value': '' }))))
      } else if (delta < 0) {
        state.pieces.splice(state.pieces.length + delta, -delta)
      }
    },
    setParts (state, value) {
      state.parts = +value
    },
    setSecret (state, value) {
      state.secret = value
    }
  }
})
