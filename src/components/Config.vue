<template>
  <div class="hello">
    <h3>Config</h3>
    <div class="config-field">
      <span>threshold:</span>
      <input type="text" v-model="threshold">
    </div>
    <div class="config-field">
      <span>parts:</span>
      <input type="text" v-model="parts">
    </div>
    <div class="config-field">
      <span>secret:</span>
      <input type="text" v-model="secret">
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'Config',
  computed: {
    ...mapFields(['secret', 'threshold', 'parts'])
    // secret: {
    //   get () {
    //     return this.$store.state.secret
    //   },
    //   set (value) {
    //     this.$store.commit('setSecret', value)
    //   }
    // }
  }
}
</script>

<style lang="scss">

</style>
