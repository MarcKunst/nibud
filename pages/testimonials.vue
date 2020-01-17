<template>
  <section class="container-testimonials">
      <nav>
        <nuxt-link class="button--blank"  to="/loan">
          <img class="back-button-img" src="../assets/arrow-back.png" alt="back to previous page">
        </nuxt-link>
      </nav>
      <h1>Een studieschuld hebben is niet het eind van de wereld!</h1>
      <p class="intro-text">Lees en/of luister iedere maand naar de verhalen van andere studenten die praten over hun studieschuld en financi&#235;n!</p>
      <section class="testemonial-wrapper">
          <h2>Barney (26)</h2>
          <img class="testimonials-img" src="../assets/thedude.png" alt="Nejankie">
          <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</h3>
            <audio
                controls
                src="/media/examples/t-rex-roar.mp3">
                Your browser does not support the
                <code>audio</code> element.
            </audio>
      </section>
      <section class="testemonial-wrapper">
          <h2>Barney (26)</h2>
          <img class="testimonials-img" src="../assets/thedude.png" alt="Nejankie">
          <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</h3>
            <audio
                controls
                src="/media/examples/t-rex-roar.mp3">
                Your browser does not support the
                <code>audio</code> element.
            </audio>
      </section>
      <nuxt-link class="next-button"  to="/graduate">
        <img class="next-button-img" src="../assets/rectangle.png" alt="next page button">
      </nuxt-link>
  </section>
</template>

<script>

export default {
  data() {
    return {
      hover: false
    }
  }
}  
</script>

<style scoped>
.container-testimonials {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(#4C5896, #8B94BA);
  padding: 0 2rem;
}

h2 {
    text-align: center;font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 600;
    font-size: 1.3rem;
    color: #fdfdfd;
    margin: 1rem 0;
}

h3 {
    text-align: center;font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 600;
    font-size: 0.9rem;
    color: #fdfdfd;
    margin: 1rem 0;
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

.testemonial-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4rem;
}

.testimonials-img {
    width: 75%;
}

.intro-text {
    text-align: center;font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 1rem;
    color: #fdfdfd;
    margin: 2rem 0;
    height: 5rem;
    border-bottom: 1px solid #fdfdfd;
    box-sizing: content-box;
}

</style>