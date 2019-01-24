<template>
  <div class="config-view">
    <div class="row">
      <div class="col-sm-6">
        <div class="config-field form-group">
          <h4>Required Pieces</h4>
          <div class="row">
            <div class="col-8">
              How many pieces shall be required to regenerate the secret?
            </div>
            <div class="col-4">
              <input
                class="big-control form-control"
                type="number"
                min="2"
                :max="parts"
                v-model="threshold">
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="config-field">
          <h4>Total Pieces</h4>
          <div class="row">
            <div class="col-8">
              How many shares of the secret would you like to distribute?
            </div>
            <div class="col-4">
              <input
              class="big-control form-control"
              type="number"
              :min="threshold"
              v-model="parts">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="config-field">
      <h4>Secret</h4>
      <div>Type your message here</div>
      <textarea
        type="text"
        class="form-control"
        v-model="secret"/>
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
        this.$store.commit('setThreshold', value)
      }
    }
  }
}
</script>

<style lang="scss">
h4 {
  margin-top: 12px;
  border-bottom: 1px solid #ddd;
}
.config-field {
  text-align: left;
  .big-control {
    font-size: 64px;
    height: 80px;
    text-align: center;
    border: 0;
  }
}
</style>
