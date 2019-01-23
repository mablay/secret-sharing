<template>
  <div class="home">
    <h1>Secret Sharing</h1>
    <Config/>
    <Shares/>
    <Pieces/>
  </div>
</template>

<script>
// @ is an alias to /src
import Config from '@/components/Config.vue'
import Shares from '@/components/Shares.vue'
import Pieces from '@/components/Pieces.vue'

export default {
  name: 'home',
  components: {
    Config,
    Shares,
    Pieces
  }
}
</script>
