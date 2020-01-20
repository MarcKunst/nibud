<template>
  <section class="container">
      <nav>
        <nuxt-link class="button--blank"  to="/prev-duration">
            <img class="back-button-img" src="../assets/arrow-back.png" alt="back to previous page">
        </nuxt-link>
      </nav>
      <h1>Hoelang verwacht je dat je studie nog duurt?</h1>
      <SelectDuration />
        <nuxt-link class="next-button"  to="/debt-result">
            <img class="next-button-img" src="../assets/rectangle.png" alt="next page button">
        </nuxt-link>
  </section>
</template>

<script>
import SelectDuration from '~/components/SelectDuration.vue'

export default {
  components: {
    SelectDuration
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

.next-button{
    display: flex;
    justify-content: center;
    width: 100%;
}

.next-button-img {
    width: 12rem;
    margin: 0 auto;
}

</style>