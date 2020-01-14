<template>
  <section class="container">
      <nav>
        <nuxt-link class="button--blank"  to="/loan">back</nuxt-link>
      </nav>
      <h1>Studieschuld</h1>
      <DebtSelect />
      <nuxt-link class="next-button"  to="/graduate">
        <img class="next-button-img" src="../assets/rectangle.png" alt="next page button">
      </nuxt-link>
  </section>
</template>

<script>
import DebtSelect from '~/components/DebtSelect.vue'

export default {
  components: {
    DebtSelect
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

nav {
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: left;
    justify-items: center;
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