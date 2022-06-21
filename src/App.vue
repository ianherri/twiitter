<!-- HTML -->
<template>
  <UserProfile></UserProfile>
</template>

<!-- JS  -->
<!-- import then export as a component to render it -->

<script>
import UserProfile from './components/UserProfile'

export default {
  name: 'App',
  components: { UserProfile },
}
</script>

<!-- CSS styles -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
  background-color: #f3f5fa;
}
</style>
