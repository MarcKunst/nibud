<template>
  <section class="container">
      <nav>
        <nuxt-link class="button--blank"  to="/debt-result">
          <img class="back-button-img" src="../assets/arrow-back.png" alt="back to previous page">
        </nuxt-link>
      </nav>
      <h1>Hoe hoog is jouw studieschuld?</h1>
      <p class="intro-text">
          Hieronder zie je hoe hoog de studieschulden zijn van andere studenten.
      </p>
      <button type="button" v-on:click="show = !show"></button>
      <p v-bind:class="toggleClass">
        Deze cijfers komen uit een enquête voor studenten van de Hogeschool van Amsterdam.
      </p>
      <DebtChart />
      <nuxt-link class="next-button"  to="/budget-intro">
        <img class="next-button-img" src="../assets/rectangle.png" alt="next page button">
      </nuxt-link>
  </section>
</template>

<script>
import DebtChart from '~/components/CurrentDebtChart.vue'

export default {
    data () {
        return {
        show: true,
        number: null
        }
    },
        computed: {
        toggleClass: function(){
            return {
                show: this.show
            }
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
  background: linear-gradient(#860034, #BA84A7);
  padding: 0 2rem;
}

h1 {
  margin-bottom: 1rem;
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
    margin: 1rem auto;
}

button {
    height: 1.4rem;
    width: 1.4rem;
    background-image: url(../assets/info.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: none;
    border-radius: 1rem;
    padding-top: 0.5rem;
}

p {
    visibility: visible;
    font-size: 0.8rem;
    color: #fdfdfd;
    transition: margin 0.5s ease;
    margin: 1rem 0;
    display: block;
}

.show{
    visibility: hidden;
    margin: 0;
    height: 0;
}

</style>