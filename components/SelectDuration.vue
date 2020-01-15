<template>
    <div id="duration-container">
        <ul class="donate-now">
            <li>
    <input type="radio" id="a25" value="6" name="duration" v-model="picked" />
    <label for="a25">Een half jaar</label>
  </li>
  <li>
    <input type="radio" id="a50" value="12" name="duration" v-model="picked" />
    <label for="a50">1 jaar</label>
  </li>
  <li>
    <input type="radio" id="a75" value="24" name="duration" checked="checked" v-model="picked" />
    <label for="a75">2 jaar</label>
  </li>
  <li>
    <input type="radio" id="a100" value="36" name="duration" v-model="picked" />
    <label for="a100">3 jaar</label>
  </li>
  <li>
    <input type="radio" id="other" value="48" name="duration" v-model="picked" />
    <label for="other">4 jaar</label>
  </li>
  <span>Picked: {{ picked }}</span>
</ul>
        <!-- <form id="duration-form">
            <input type="radio" id="one" value="6" name="duration" v-model="picked">
            <label for="one">Een half jaar</label>
            <br>
            <input type="radio" id="two" value="12" name="duration" v-model="picked">
            <label for="two">1 jaar</label>
            <br>
            <input type="radio" id="three" value="24" name="duration" v-model="picked">
            <label for="three">2 jaar</label>
            <br>
            <input type="radio" id="four" value="36" name="duration" v-model="picked">
            <label for="four">3 jaar</label>
            <br>
            <input type="radio" id="five" value="48" name="duration" v-model="picked">
            <label for="five">4 jaar</label>
            <br>
            <span>Picked: {{ picked }}</span>
        </form> -->
    </div>
</template>

<script>
export default {
    data() {
        return{
            picked: ""
        }
    },
}


</script>

<style scoped>
#duration-container {
    margin-top: 2rem;
}

.default--white {
  font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 1rem;
  color: #fdfdfd;
}

label {
    background: #fdfdfd;
    width: 100%;
    display: block;
    text-align: center;
    font-family: 'Bangers', cursive;

}

.donate-now {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.donate-now li {
  width: 100%;
  height: 4rem;
  position: relative;
}

.donate-now label,
.donate-now input {
  display: block;
  position: absolute;
}

.donate-now input[type="radio"]:checked+label,
.Checked+label {
  background: #99135F;
  color: #fdfdfd;
}

.donate-now label {
  padding: 0.5rem;
  cursor: pointer;
}

.donate-now label:hover {
  background: #DDD;
  
}

</style>