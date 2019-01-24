<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "~bootstrap/scss/bootstrap.scss";

h1 {
  text-align: center;
}
h2 {
  margin-top: 20px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
