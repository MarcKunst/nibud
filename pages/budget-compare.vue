<template>
  <section class="container">
        <nav>
            <nuxt-link class="button--blank"  to="/debt-result">
                <img class="back-button-img" src="../assets/arrow-back.png" alt="back to previous page">
            </nuxt-link>
        </nav>
        <h1>Vergelijk jouw begroting met die van andere studenten</h1>
        <BudgetCompare />
        <nuxt-link class="next-button"  to="/budget-form">
            <img class="next-button-img" src="../assets/rectangle.png" alt="next page button">
        </nuxt-link>
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

.next-button{
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 1rem;
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