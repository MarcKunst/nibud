<template>
  <section class="container">
        <nav>
            <nuxt-link class="button--blank"  to="/budget-result">
                <img class="back-button-img" src="../assets/arrow-back.png" alt="back to previous page">
            </nuxt-link>
        </nav>
        <h1>Vergelijk jouw begroting met die van andere studenten</h1>
        <BudgetCompare />
        <div class="next-button-container">
            <nuxt-link class="next-button"  to="/testimonials-intro">
                <img class="next-button-img" src="../assets/rectangle.png" alt="next page button">
            </nuxt-link>
        </div>        
  </section>
</template>

<script>
import BudgetCompare from '~/components/BudgetCompare.vue'

export default {
    components: {
        BudgetCompare,
    }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(#3780AB, #9DAEB6);
  padding: 0 2rem;
}

nav>a {
    padding: 1.5rem 0;
}

.next-button-img {
    width: 12rem;
    margin: 0 auto;
}

.text {
    text-align: center;
    color: #fdfdfd;
    font-size: 0.9rem;
    margin: 1rem 0;
}
</style>