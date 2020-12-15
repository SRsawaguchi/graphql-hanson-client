<template>
  <div id="app">
    <p>{{ links }}</p>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'App',
  apollo: {
    links: gql`query {
	links{
    title
    address,
    user{
      name
    }
  }
}`,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
