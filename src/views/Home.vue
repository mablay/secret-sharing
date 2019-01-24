<template>
  <div class="home container-fluid">
    <h1>Secret Sharing</h1>
    <div id="nav">
      <router-link to="/about">About</router-link>
    </div>

    <Config/>
    <div class="row">
      <div class="col-md-6">
        <Shares/>
      </div>
      <div class="col-md-6">
        <Pieces/>
      </div>
    </div>
    <Result/>
  </div>
</template>

<script>
// @ is an alias to /src
import Config from '@/components/Config.vue'
import Shares from '@/components/Shares.vue'
import Pieces from '@/components/Pieces.vue'
import Result from '@/components/Result.vue'

export default {
  name: 'home',
  components: {
    Config,
    Shares,
    Pieces,
    Result
  }
}
</script>
