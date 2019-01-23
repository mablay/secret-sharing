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
    pieces: ['8010', '8020', '8030']
      .map(x => ({ value: x }))
      // entered by the user (recombination attempt)
  },
  getters: {
    getField,
    shares: state => {
      const hSecret = atoh(state.secret)
      console.log('secret %s => %s', state.secret, hSecret)
      return shamir.share(hSecret, +state.parts, +state.threshold)
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
      // console.log('result:', validPieces, shamir.combine(validPieces))
      return htoa(shamir.combine(validPieces))
    }
  },
  mutations: {
    updateField,
    setThreshold (state, value) {
      state.threshold = +value
    },
    setParts (state, value) {
      state.parts = +value
    },
    setSecret (state, value) {
      state.secret = value
    },
    addPiece (state, value) {
      state.pieces.push(value)
    },
    removePiece (state, index) {
      state.pieces.splice(index, 1)
    }
  },
  actions: {}
})
