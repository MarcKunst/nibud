<template>
  <section class="container">
      <nav>
        <nuxt-link class="button--blank"  to="/budget-compare">
            <img class="back-button-img" src="../assets/arrow-back.png" alt="back to previous page">
        </nuxt-link>
         </nav>
        <h1>Een studieschuld hebben is niet het einde van de wereld!</h1>
         <p class="intro-text">
             Wil je meer weten over de financi&#235;n van andere studenten? Lees en/of luister naar verhalen van medestudenten. Let's go!
         </p>
        <div class="gif-container">
            <iframe src="https://giphy.com/embed/wKdb3kFLjf1Injor3J" width="40%" height="280" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
        <div class="next-button-container">
            <nuxt-link class="next-button"  to="/testimonials">
                <img class="next-button-img" src="../assets/rectangle.png" alt="next page button">
            </nuxt-link>
        </div>             
        <nuxt-link class="skip-button"  to="/thanks">
            Deze stap overslaan
        </nuxt-link>
  </section>
</template>

<script>
export default {
    
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

.gif-container {
    background-image: url(../assets/powroze.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    display: flex;
    justify-content: center;
}

nav>a {
    padding: 1.5rem 0;
}

.next-button-img {
    width: 12rem;
    margin: 0rem auto 1rem;
}

.intro-text {
    text-align: center;
    color: #fdfdfd;
    margin: 2rem 0 0;
}

.skip-button {
    display: flex;
    justify-content: center;
    width: 100%;
    color: #fdfdfd;
    font-size: 0.8rem;
    text-align: center;
    margin-bottom: 1rem;
}

</style>