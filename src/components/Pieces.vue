<template>
  <div class="pieces-view">
    <h2>Recombine</h2>
    <div class="piece-list">
      <input
        v-for="(piece, index) in pieces"
        :key="index"
        v-model="piece.value"
        size="64"
        class="form-control"
      />
    </div>
  </div>
</template>

<script>
import { mapMultiRowFields } from 'vuex-map-fields'

export default {
  name: 'Pieces',
  computed: {
    ...mapMultiRowFields(['pieces'])
  }
}
</script>

<style lang="scss">
.piece-list {
  padding-bottom: 12px;
}
.pice-input {
  display: block;
  margin: auto;
}
</style>
