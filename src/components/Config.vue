<template>
  <div class="hello">
    <h2>Config</h2>
    <div class="config-field">
      <h4>Threshold</h4>
      <div>How many pieces shall be required to regenerate the secret?</div>
      <input type="number" min="2" :max="parts" v-model="threshold">
    </div>
    <div class="config-field">
      <h4>Parts</h4>
      <div>How many shares of the secret would you like to distribute?</div>
      <input type="number" :min="threshold" v-model="parts">
    </div>
    <div class="config-field">
      <h4>Secret</h4>
      <div>Type your message here</div>
      <input type="text" class="password" v-model="secret">
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'Config',
  computed: {
    ...mapFields(['secret', 'threshold', 'parts']),
    threshold: {
      get () {
        return this.$store.state.threshold
      },
      set (value) {
        // this.$store.dispatch('changeThreshold', value)
        this.$store.commit('setThreshold', value)
      }
    }
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
.config-field {
  text-align: left;
  padding-right: 10px;
  h4 {
    margin-bottom: 0;
    margin-top: 8px;
  }
  input {
    margin: 0;
    padding: 4px;
    width: 100%;
    line-height: 28px;
    font-size: 20px;
    text-align: center;
  }

  input.password {
    font-family: 'text-security-disc';
  }
}
</style>
