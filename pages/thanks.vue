<template>
  <section class="container">
      <nav>
        <nuxt-link class="button--blank"  to="/testimonials">
            <img class="back-button-img" src="../assets/arrow-back.png" alt="back to previous page">
        </nuxt-link>
         </nav>
        <h1>You're amazing!</h1>
         <p class="intro-text">
             Yes, dankje voor het lezen en/of luisteren naar andere studenten. Wij hopen dat je meer inzicht hebt gekregen over je financi&#235;n! En onthoud, je bent niet de enige met een studieschuld.
         </p>
        <div class="gif-container">
            <iframe src="https://giphy.com/embed/KJg6Znn4V1Jcs" width="55%" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
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
  background: linear-gradient(#000000, #4C7992);
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