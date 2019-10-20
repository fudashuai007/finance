<template>
  <div>
    <!-- <HelloWorld /> -->
		<BackGround />
    <Login/>
  </div>
</template>

<script>
import 'normalize.css'
import Login from './components/login'
import BackGround from './components/BackGround'
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'app',
  components: {
		// HelloWorld,
		Login,
		BackGround
  }
}
</script>

<style>
</style>
