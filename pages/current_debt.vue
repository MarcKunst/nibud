<template>
  <section class="container">
    <div>
      <h1 class="title">
        Hoe hoog is je huidige studieschuld nu?
      </h1>
      <h2 class="subtitle">
        A budget tool for students with a student debt
      </h2>
      <div class="links">
        <a
          href="#"
          target="_blank"
          class="button--white"
        >
          Studieschuld
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #EF7A52;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #FDFDFD;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #FDFDFD;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>