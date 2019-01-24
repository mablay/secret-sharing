<template>
  <div class="shares-view">
    <h2>Pieces</h2>
    <div
      v-for="(share, index) in shares"
      :key="index"
      @focus="$event.target.select()"
      class="share">
      {{share}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Shares',
  computed: mapGetters(['shares']),
  methods: {
    selectAll (el) {
      console.log(el)
      this.setSelectionRange(0, this.value.length)
    }
  }
}
</script>

<style lang="scss">
  .share {
    margin: 4px;
    text-align: center;
    font-family: monospace;
    font-size: 16px;
    overflow-x: hidden;
    word-wrap: break-word;
  }
</style>
