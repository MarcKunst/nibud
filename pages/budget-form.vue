<template>
  <section class="container">
      <nav>
        <nuxt-link class="button--blank"  to="/budget-intro">
            <img class="back-button-img" src="../assets/arrow-back.png" alt="back to previous page">
        </nuxt-link>
         </nav>
        <h1>Begroting opstellen</h1>
        <IncomeForm />
        <ExpensesForm />
        <div class="next-button-container">
            <nuxt-link class="next-button"  to="/budget-result">
                <img class="next-button-img" src="../assets/rectangle.png" alt="next page button">
            </nuxt-link>
        </div>
  </section>
</template>

<script>
import IncomeForm from '~/components/IncomeForm.vue'
import ExpensesForm from '~/components/ExpensesForm.vue'

export default {
  components: {
    IncomeForm,
    ExpensesForm
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
    margin: 1rem auto;
}

.intro-text {
    text-align: center;
    color: #fdfdfd;
    font-size: 0.9rem;
    margin: 1rem 0;
}
</style>