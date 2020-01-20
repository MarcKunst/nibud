<template>
  <section class="container">
      <nav>
        <nuxt-link class="button--blank"  to="/current_debt">
            <img class="back-button-img" src="../assets/arrow-back.png" alt="back to previous page">
        </nuxt-link>
         </nav>
        <h1>Bereken jouw studieschuld</h1>
         <p class="intro-text">
             Hey studenten! Ben jij ook benieuwd naar wat jouw huidige studieschuld is? Wij helpen jou graag op weg, klik op start.
         </p>
        <div class="gif-container">
            <iframe src="https://giphy.com/embed/CjmvTCZf2U3p09Cn0h" width="50%" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
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
  background: linear-gradient(#860034, #BA84A7);
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
    margin: 1rem auto;
}

.intro-text {
    text-align: center;
    color: #fdfdfd;
    font-size: 0.9rem;
    margin: 2rem 0;
}
</style>