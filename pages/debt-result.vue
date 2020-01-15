<template>
  <section class="container">
      <nav>
        <nuxt-link class="button--blank"  to="/graduate">
            <img class="back-button-img" src="../assets/arrow-back.png" alt="back to previous page">
        </nuxt-link>
        </nav>
        <h1>De gemiddelde studieschulden worden telkens hoger</h1>
        <YourDebt />
        <nuxt-link class="next-button"  to="/budget-intro">
            <img class="next-button-img" src="../assets/rectangle.png" alt="next page button">
        </nuxt-link>
  </section>
</template>

<script>
import YourDebt from '~/components/YourDebtResult.vue'

export default {
    components: {
        YourDebt
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(#000000, #4C7992);
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