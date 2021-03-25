<template>
  <div class="container sm:mx-auto" id="app">
      <h1 class="text-center text-6xl"> Kuizz - Time to shine</h1>
      <Questionnaire />
  </div>
</template>

<script>
import Questionnaire from './components/Questionnaire'

export default {
  components: { Questionnaire },
  name: 'App'
}
</script>

<style>

</style>
