<template>
  <section class="container">
      <nav>
        <nuxt-link class="button--blank"  to="/post-duration">
            <img class="back-button-img" src="../assets/arrow-back.png" alt="back to previous page">
        </nuxt-link>
        </nav>
        <h1>Vergelijk jouw verwachte studieschuld</h1>
        <YourDebt />
        <div class="next-button-container">
            <nuxt-link class="next-button"  to="/current_debt">
                <img class="next-button-img" src="../assets/rectangle.png" alt="next page button">
            </nuxt-link>
        </div>
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
  align-items: center;
  background: linear-gradient(#860034, #BA84A7);
  padding: 0 2rem;
}

h1 {
    margin-bottom: 1rem;
}

nav>a {
    padding: 1.5rem 0;
}

.next-button-img {
    width: 12rem;
    margin: 1rem auto;
}
</style>