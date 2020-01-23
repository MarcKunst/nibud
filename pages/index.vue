<template>
  <section class="container">
    <div class="wrapper">
      <div class="title-holder">
        <h1 class="title">
            Stubu
        </h1>
        <h2 class="subtitle">
           Studentenbudget
        </h2>
                <nuxt-link to="/debt-intro">
          <img class="start-button-img" src="../assets/landingpage-arrow.png" alt="start button">
        </nuxt-link>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  transition: "default"
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  background: linear-gradient(#000000, #4C7992);
}

.wrapper {
  background-image: url(../assets/powroze.png);
  background-repeat: none;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 90vh;
  position: relative;
   display: flex;
  justify-content: center;
}

.title-holder {
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 12rem;

}

.title {
  font-size: 8rem;
}

.subtitle {
  font-family: 'Bangers', cursive;
  font-size: 2.8rem;
  color: #fdfdfd;
  text-align: center;
}

.start-button-img {
  width: 18rem;
  margin-top: 8rem;
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

.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

@media only screen and (min-width : 768px) {

  .wrapper {
    background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 100vh;
  position: relative;
   display: flex;
  justify-content: center;
}

.title-holder {
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 25rem;

}

.start-button-img {
  width: 18rem;
  margin-top: 18rem;
}

}


@media only screen  and (min-width : 1224px)  {

    .wrapper {
      background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
  }

  .title-holder {
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 14rem;

}

.start-button-img {
  width: 18rem;
  margin-top: 8rem;
}
}
</style>
