<template>
  <section class="container">
    <div>
      <h1 class="title">
        Stubu
      </h1>
      <h2 class="subtitle">
        Zorgeloos studeren
      </h2>
      <p class="intro-text">
        He jij daar! Maak jij je ook wel eens zorgen als student over die berg van een studieschuld?
        Don't worry, Stubu - Studentbudget - got your back!
      </p>
      <div class="links">
        <nuxt-link class="button--orange"  to="/loan">Let's go</nuxt-link>
      </div>
      <div class="links">
        <nuxt-link class="button--blank"  to="#">Begroting berekenen</nuxt-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  background: #fdfdfd;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 600;
  font-size: 3rem;
  color: #35495e;
  letter-spacing: 1px;
  margin-top: 3rem;
}

.subtitle {
  font-weight: 300;
  font-size: 1rem;
  color: #526488;
  word-spacing: 3px;
  padding-bottom: 3rem;
}

.intro-text {
  display: block;
  width: 80%;
  text-align: left;
  color: #434F94;
  margin: 0 auto;
  font-weight: 500;
  font-size: 0.9rem;
  word-spacing: 2px;
}

.links {
  padding-top: 15px;
}

.button--orange {
  display: inline-block;
  border-radius: 50px;
  background-color: #EF7A52;
  color: #fdfdfd;
  text-decoration: none;
  padding: 0.7rem 3rem;
}

.button--orange:hover {
  color: #fdfdfd;
  background-color: #70331f;
}

.button--blank {
  color: #2c2c2c;
  text-decoration: none;
  padding: 0.7rem 3rem;
}
</style>
