<template>
  <section class="container">
      <nav>
        <nuxt-link class="button--blank"  to="/loan">
            <img class="back-button-img" src="../assets/arrow-back.png" alt="back to previous page">
        </nuxt-link>
      </nav>
      <h1>Hoe lang studeer je al?</h1>
      <StudySlider />
      <div class="next-button-container">
        <nuxt-link class="next-button"  to="/graduate">
            <img class="next-button-img" src="../assets/rectangle.png" alt="next page button">
        </nuxt-link>
      </div>
  </section>
</template>

<script>
import StudySlider from '~/components/StudySlider.vue'

export default {
  components: {
    StudySlider
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(#860034, #BA84A7);
  padding: 0 2rem;
}

nav>a {
    padding: 1.5rem 0;
}

.next-button-img {
    width: 12rem;
    margin: 0 auto;
}
</style>