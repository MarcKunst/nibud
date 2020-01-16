<template>
    <div id="duration-container">
        <ul class="donate-now">
            <li>
    <input type="radio" id="6months" value="6" name="duration" @input="updateDuration"/>
    <label for="6months">Een half jaar</label>
  </li>
  <li>
    <input type="radio" id="12months" value="12" name="duration" @input="updateDuration" />
    <label for="12months">1 jaar</label>
  </li>
  <li>
    <input type="radio" id="24months" value="24" name="duration" @input="updateDuration" />
    <label for="24months">2 jaar</label>
  </li>
  <li>
    <input type="radio" id="36months" value="36" name="duration" @input="updateDuration" />
    <label for="36months">3 jaar</label>
  </li>
  <li>
    <input type="radio" id="48months" value="48" name="duration" @input="updateDuration" />
    <label for="48months">4 jaar</label>
  </li>
</ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
      duration () {
        return this.$store.state.duration
      }
    },
    methods: {
      updateDuration (e) {
        this.$store.commit('updateDuration', e.target.value)
      }
    }
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
    transform: skewX(15deg) skewY(1deg);
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