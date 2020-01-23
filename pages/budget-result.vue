<template>
  <section class="container">
        <nav>
            <nuxt-link class="button--blank"  to="/budget-form">
                <img class="back-button-img" src="../assets/arrow-back.png" alt="back to previous page">
            </nuxt-link>
        </nav>
        <h1>Dit is jouw begroting</h1>
        <button type="button" v-on:click="show = !show"></button>
        <p v-bind:class="toggleClass">
            Let op! Hier is je studiefinanciering en/of lening niet bijgerekend. Dit kan je er zelf nog bij optellen.
        </p>
        <ResultIncome />
        <p class="text"></p>
        <div class="next-button-container">
            <nuxt-link class="next-button"  to="/budget-compare">
                <img class="next-button-img" src="../assets/rectangle.png" alt="next page button">
            </nuxt-link>
        </div>
  </section>
</template>

<script>
import ResultIncome from '~/components/BudgetResults/ResultIncome.vue'

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
        ResultIncome
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
    margin-top: 1rem;
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