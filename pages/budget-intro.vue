<template>
  <section class="container">
      <nav>
        <nuxt-link class="button--blank"  to="/current_debt">
            <img class="back-button-img" src="../assets/arrow-back.png" alt="back to previous page">
        </nuxt-link>
         </nav>
        <h1>jouw begroting</h1>
         <p class="intro-text">Een begroting maken? Pfff, dat is toch nergens voor nodig. Toch kan het handig zijn om overzicht krijgen over jouw financi&#235;n! 
             Want dan weet je precies wat je inkomsten en uitgaven zijn.</p>
        <div class="gif-container">
            <iframe src="https://giphy.com/embed/xox9kxPMcM81y" width="55%" height="260" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
        <div class="next-button-container">
            <nuxt-link class="next-button"  to="/budget-form">
                <img class="next-button-img" src="../assets/rectangle.png" alt="next page button">
            </nuxt-link>
        </div>
        <nuxt-link class="skip-button"  to="/testimonials-intro">
            Ga gelijk naar lezen en luisteren naar andere studenten
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
  background: linear-gradient(#3780AB, #9DAEB6);
  padding: 0 2rem;
}

.gif-container {
    background-image: url(../assets/powpaars.png);
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
    margin: 0 auto 1rem;
}

.skip-button {
    display: flex;
    justify-content: center;
    width: 100%;
    color: #fdfdfd;
    font-size: 0.8rem;
    text-align: center;
}

</style>