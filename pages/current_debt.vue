<template>
  <section class="container">
      <nav>
        <nuxt-link class="button--blank"  to="/loan">
          <img class="back-button-img" src="../assets/arrow-back.png" alt="back to previous page">
        </nuxt-link>
      </nav>
      <h1>Studieschuld</h1>
      <DebtChart />
      <nuxt-link class="next-button"  to="/graduate">
        <img class="next-button-img" src="../assets/rectangle.png" alt="next page button">
      </nuxt-link>
  </section>
</template>

<script>
import DebtChart from '~/components/CurrentDebtChart.vue'

export default {
  data() {
    return {
      hover: false
    }
  },
  components: {
    DebtChart
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(#4C5896, #8B94BA);
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

.next-button-img:hover {
    -webkit-transform: rotate(-3deg);
    -moz-transform: rotate(-3deg);
    -o-transform: rotate(-3deg);
    -ms-transform: rotate(-3deg);
    transform: rotate(-3deg);
}

</style>