<template>
  <div class="result-view">
    <h2>Result</h2>
    <div class="alert alert-primary">
      {{result}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Result',
  computed: mapGetters(['result'])
}
</script>

<style lang="scss">
</style>
