<template>
  <section class="container-testimonials">
      <nav>
        <nuxt-link class="button--blank"  to="/testimonials-intro">
          <img class="back-button-img" src="../assets/arrow-back.png" alt="back to previous page">
        </nuxt-link>
      </nav>
      <h1>Een studieschuld hebben is niet het einde van de wereld!</h1>
      <p class="intro-text">Lees en/of luister iedere maand naar de verhalen van andere studenten die praten over hun studieschuld en financi&#235;n!</p>
      <section class="testemonial-wrapper">
          <h2>Marc (26) Over toekomstzorgen</h2>
          <img class="testimonials-img" src="../assets/students/illustraties-06.png" alt="Image of Marc">
          <h3>“Ik maak me wel eens zorgen over de toekomst, hoe zit dat als ik later een hypotheek wil?”</h3>
            <audio
                controls
                src="../assets/soundclips/Marc-interviewkopie.mp3">
                Your browser does not support the
                <code>audio</code> element.
            </audio>
      </section>
      <section class="testemonial-wrapper">
          <h2>Janice (24) Over een hoge studieschuld</h2>
          <img class="testimonials-img smaller" src="../assets/students/nejankie.png" alt="Image of Janice">
          <h3>“Ik schat dat ik nu op de 20 duizend euro studieschuld zit. Ik woon op mezelf in Amsterdam en mijn ouders dragen verder niks bij. Ik moet eigenlijk wel lenen, anders kan ik mijn huur bijna niet betalen”</h3>
            <audio
                controls
                src="../assets/soundclips/janice-interview.mp3">
                Your browser does not support the
                <code>audio</code> element.
            </audio>
      </section>
      <section class="testemonial-wrapper">
          <h2>James (28) over maandelijke bezuinigingen</h2>
          <img class="testimonials-img" src="../assets/students/thedude.png" alt="Image of James">
          <h3>“Eet minder vaak buiten de deur, dat scheelt zoveel geld”.</h3>
            <audio
                controls
                src="../assets/soundclips/the_dude.mp3">
                Your browser does not support the
                <code>audio</code> element.
            </audio>
      </section>
      <section class="testemonial-wrapper">
          <h2>Est&#233;e (22) over haar studieschuld</h2>
          <img class="testimonials-img bigger" src="../assets/students/illustraties-07.png" alt="Image of James">
          <h3>“Eet minder vaak buiten de deur, dat scheelt zoveel geld”.</h3>
            <audio
                controls
                src="../assets/soundclips/estee_interview.mp3">
                Your browser does not support the
                <code>audio</code> element.
            </audio>
      </section>
      <section class="testemonial-wrapper">
          <h2>Stanley (21) over studiekosten</h2>
          <img class="testimonials-img smaller" src="../assets/students/illustraties-11.png" alt="Image of James">
          <h3>“Ik focus mij op dit moment volledig op school. Ik werk daarom even niet, maar financieel zorg ik ervoor dat ik genoeg geld heb voor mijn andere eventuele kosten.”</h3>
            <audio
                controls
                src="../assets/soundclips/stanley.mp3">
                Your browser does not support the
                <code>audio</code> element.
            </audio>
      </section>
      <section class="testemonial-wrapper">
          <h2>Carla (21) over geld sparen</h2>
          <img class="testimonials-img bigger" src="../assets/students/illustraties-09.png" alt="Image of James">
          <h3>“Spaar niet te veel, geniet ook een beetje van het leven! Later als je een baan hebt kun je makkelijker sparen. Maak je niet te druk over hoeveel spaargeld je hebt.”</h3>
            <audio
                controls
                src="../assets/soundclips/carla.mp3">
                Your browser does not support the
                <code>audio</code> element.
            </audio>
      </section>
      <section class="testemonial-wrapper">
          <h2>Daniel (24) over zijn financi&#235;n</h2>
          <img class="testimonials-img" src="../assets/students/illustraties-16.png" alt="Image of James">
          <h3>“Zoek van te voren heel goed uit wat je kosten zijn voor je studie. Pluis het financieel goed uit, dan ben je voorbereid op alles!”</h3>
            <audio
                controls
                src="../assets/soundclips/daniel_interview.mp3">
                Your browser does not support the
                <code>audio</code> element.
            </audio>
      </section>
      <section class="testemonial-wrapper">
          <h2>Jiska (19) over maximaal lenen</h2>
          <img class="testimonials-img" src="../assets/students/illustraties-13.png" alt="Image of James">
          <h3>“Ik wilde graag het huis uit, en ik wist dat ik dat niet kon betalen zonder maximaal te lenen. Ik wil namelijk naast studeren en werken ook graag leuke dingen doen, tijd hebben voor mijzelf, mijn sport en genoeg geld hebben om eten te kunnen kopen.”</h3>
            <audio
                controls
                src="../assets/soundclips/jiska_interview.mp3">
                Your browser does not support the
                <code>audio</code> element.
            </audio>
      </section>
      <section class="testemonial-wrapper">
          <h2>Mischa (23) over geld lenen</h2>
          <img class="testimonials-img" src="../assets/students/illustraties-19.png" alt="Image of James">
          <h3>“Ik denk niet dat je je moet tegen laten houden om een studieschuld te “nemen”. Wel denk ik dat het belangrijk is om na te denken of het echt noodzakelijk is om bijvoorbeeld maximaal te gaan lenen. Een studie volgen is een goede investering in jezelf!”</h3>
            <audio
                controls
                src="../assets/soundclips/Mischa_interview.mp3">
                Your browser does not support the
                <code>audio</code> element.
            </audio>
      </section>
      <section class="testemonial-wrapper">
          <h2>Anous (22) over geld sparen</h2>
          <img class="testimonials-img" src="../assets/students/illustraties-17.png" alt="Image of James">
          <h3>“Ik leen maandelijks geld, maar ik spaar alles op voor later als ik klaar ben met mijn studie. Zo start ik mijn loopbaan met wat extra geld op de bank.”</h3>
            <audio
                controls
                src="../assets/soundclips/anous_interview.mp3">
                Your browser does not support the
                <code>audio</code> element.
            </audio>
      </section>
        <div class="next-button-container">
            <nuxt-link class="next-button"  to="/thanks">
                <img class="next-button-img" src="../assets/rectangle.png" alt="next page button">
            </nuxt-link>
        </div>     
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
    font-size: 1rem;
    color: #fdfdfd;
    margin: 1rem 0;
}

h3 {
    text-align: center;font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 600;
    font-size: 0.8rem;
    color: #fdfdfd;
    margin: 1rem 0;
}

nav>a {
    padding: 1.5rem 0;
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

.bigger {
  width: 90%;
}

.smaller {
  width: 60%;
}

.intro-text {

    border-bottom: 1px solid #fdfdfd;
    padding-bottom: 1rem;
}

</style>