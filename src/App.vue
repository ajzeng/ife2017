<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html {
  font-size: 15px;
}
html, body, ul, ol, h1, h2, h3, h4, h5{
  margin: 0;
  padding: 0;
}
li {
  list-style: decimal inside;
}
a {
  color: #333;
  text-decoration: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
