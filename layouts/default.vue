<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Bangers&display=swap');

html {
  font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

h1 {
  font-family: 'Bangers', cursive;
  font-size: 1.6rem;
  color: #fdfdfd;
  text-align: center;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.button--orange {
  display: inline-block;
  border-radius: 50px;
  background-color: #EF7A52;
  color: #fdfdfd;
  text-decoration: none;
  padding: 0.7rem 3rem;
  text-align: center;
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

.back-button-img {
  width: 2.5rem;
}

nav {
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: left;
    justify-items: center;
}

nav>a {
    padding: 1.5rem 0;
}

.next-button-img:hover {
    -webkit-transform: rotate(-3deg);
    -moz-transform: rotate(-3deg);
    -o-transform: rotate(-3deg);
    -ms-transform: rotate(-3deg);
    transform: rotate(-3deg);
}

.intro-text {
   font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
    text-align: center;
    color: #fdfdfd;
    font-size: 0.9rem;
    margin: 1rem 0;
    font-weight: 600;
}

.next-button-container {
    text-align: center;
 }

.next-button{
    display: inline-block;
}

</style>
