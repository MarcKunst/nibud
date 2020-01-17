<template>
  <section class="container">
    <div>
      <h1 class="title">
        Stubu
      </h1>
      <h2 class="subtitle">
        Studentenbudget
      </h2>
        <nuxt-link to="/loan">
          <img class="start-button-img" src="../assets/landingpage-arrow.png" alt="start button">
        </nuxt-link>
      <div class="nav-container">
        <div id="home-nav">
          <nuxt-link class="to-budget"  to="/budget-intro">
            <img class="nav-img" src="../assets/calculator.png" alt="to budget page">
          </nuxt-link>
          <nuxt-link class="to-stories"  to="/testimonials">
            <img class="nav-img" src="../assets/dude.png" alt="to stories page">
          </nuxt-link>
        </div>
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
  background: linear-gradient(#000000, #4C7992);
}

.title {
  font-size: 8rem;
  margin-top: 8rem;
}

.subtitle {
  font-family: 'Bangers', cursive;
  font-size: 2.8rem;
  color: #fdfdfd;
  text-align: center;
}

.start-button-img {
  width: 18rem;
}

.nav-container{
  position: fixed;
  bottom: 0;
  width: 80%;
}

#home-nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.nav-img {
  width: 8rem;
}
</style>
