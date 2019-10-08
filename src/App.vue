<template>
	<div>
		<HelloWorld />
		<Login />
	</div>
    
</template>

<script>
import 'normalize.css'
import Login from './components/login'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
		HelloWorld,
		Login
  }
}
</script>

<style>
</style>
