<template>
  <div class="shares">
    <h3>Shares</h3>
    <pre
      v-for="(share, index) in shares"
      :key="index">
      {{share}}
    </pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Shares',
  computed: mapGetters(['shares'])
}
</script>

<style lang="scss">
  pre {
    margin: 0;
  }
</style>
