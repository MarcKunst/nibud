<template>
  <section class="container">
      <nav>
          
      </nav>
      <Counter />
      <Slider />
  </section>
</template>

<script>
import Counter from '~/components/Counter.vue'
import Slider from '~/components/Slider.vue'

export default {
  components: {
    Counter,
    Slider
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #C73784;
}
</style>