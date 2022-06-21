<!-- HTML -->
<template>
  <div id="app">
    <nav>
      <div class="navigation__logo">Twotter</div>
    </nav>
    <UserProfile></UserProfile>
  </div>
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
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #f3f5fa;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: deeppink;
    color: white;
  }
}
</style>
