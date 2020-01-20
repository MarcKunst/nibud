<template>
  <section class="container">
      <nav>
        <nuxt-link class="button--blank"  to="/current_debt">
            <img class="back-button-img" src="../assets/arrow-back.png" alt="back to previous page">
        </nuxt-link>
         </nav>
        <h1>jouw begroting</h1>
         <p class="intro-text">Een begroting maken? Pfff, dat is toch nergens voor nodig. Toch kan het handig zijn om overzicht krijgen over jouw financi&#235;n!</p>
        <br>
        <p class="intro-text">Ook kun je jouw begroting vergelijken met andere studiegenoten.</p>
        <div class="gif-container">
            <iframe src="https://giphy.com/embed/xox9kxPMcM81y" width="50%" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
        <nuxt-link class="next-button"  to="/budget-form">
            <img class="next-button-img" src="../assets/rectangle.png" alt="next page button">
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

.next-button{
    display: flex;
    justify-content: center;
    width: 100%;
}

.next-button-img {
    width: 12rem;
    margin: 0 auto;
}

.intro-text {
    text-align: center;
    color: #fdfdfd;
    font-size: 0.9rem;
    margin: 1rem 0;
}
</style>