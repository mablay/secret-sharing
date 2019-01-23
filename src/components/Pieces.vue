<template>
  <div class="pieces">
    <h3>Pieces</h3>
    <input
      v-for="(piece, index) in pieces"
      :key="index"
      v-model="piece.value"
      size="64"
      class="pice-input"
    />
    <pre>{{result}}</pre>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import { mapMultiRowFields } from 'vuex-map-fields'

export default {
  name: 'Pieces',
  computed: {
    ...mapMultiRowFields(['pieces']),
    ...mapGetters(['result'])
    // pieces: {
    //   get () {
    //     return this.$store.state.pieces
    //   },
    //   set (value) {
    //     console.log('[set] value', value)
    //     // this.$store.commit('setSecret', value)
    //   }
    // }
  },
  methods: mapMutations(['addPiece'])
}
</script>

<style lang="scss">
  .pice-input {
    display: block;
    margin: auto;
  }
</style>
