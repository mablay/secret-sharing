<template>
  <div class="config-view">
    <div class="row">
      <div class="col-sm-6">
        <div class="config-field form-group">
          <h4>Required Pieces</h4>
          <div class="row">
            <div class="col-8">
              How many pieces shall be required to regenerate the secret?
              <div>
                <vue-slider
                  v-model="threshold"
                  :min="2"
                  :max="parts"
                  tooltip="false"
                  width="auto"
                />
              </div>
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
              <div>
                <vue-slider
                  v-model="parts"
                  :min="threshold"
                  :max="9"
                  tooltip="false"
                  width="auto"
                />
              </div>
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
import vueSlider from 'vue-slider-component'

export default {
  name: 'Config',
  components: {
    vueSlider
  },
  computed: {
    ...mapFields(['secret']),
    parts: {
      get () {
        console.log('[config] parts.get')
        return this.$store.state.parts
      },
      set (value) {
        console.log('[config] parts.set', value)
        this.$store.commit('setParts', parseInt(value))
      }
    },
    threshold: {
      get () {
        return this.$store.state.threshold
      },
      set (value) {
        console.log('[config] threshold.set', value)
        this.$store.commit('setThreshold', parseInt(value))
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
