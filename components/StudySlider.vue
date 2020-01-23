<template>
    <div id="slider-container">
        <h2 class="intro-text">
        Hoe veel jaar leen je al voor je huidige of vorige studie?
        </h2>
        <div class="range-tips">
            <p>0</p>
            <p>10</p>
        </div>
        <range-slider
            class="slider"
            min="0"
            max="10"
            step="1"
            v-model="prevStudieValue"
            @change="studieHandler"

        >
        
        </range-slider>
        <div id="value-container">
            <p class="value-text">{{ prevStudieValue }} jaar</p>
        </div>
    </div>
</template>

<script type="text/javascript">
import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'
import { mapGetters } from 'vuex'


export default {
    data () {
        return {
        prevStudieValue: 0
        }
    },
    components: {
        RangeSlider
    },
    computed: {
        ...mapGetters(['prevDuration'])
    },
    methods: {
        studieHandler() {
            this.$store.dispatch('setPrevDuration', this.prevStudieValue*12)
        }
    }
}
</script>

<style scoped>
#slider-container {
    margin-top: 4rem;
}

h2 {
    margin-bottom: 1rem;
}

#value-container {
    display: flex;
    position: relative;
    justify-content: center;
    margin-top: 0;
    height: 12rem;
    background-image: url(../assets/powblauw.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}

.value-text {
    font-family: 'Bangers', cursive;
    font-size: 2.5rem;
    color: #fdfdfd;
    position: absolute;
    top: 4.7rem;
}

p.default--white{
    margin-top: 1rem;
    font-size: 1.5rem;
    font-weight: 500;
}

.range-tips {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.range-tips>p{
    font-size: 1.2rem;
    color: #fdfdfd;
}

.default--white {
  font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 1rem;
  color: #fdfdfd;
}

.slidecontainer {
  width: 100%; /* Width of the outside container */
  margin-top: 1rem;
}

.slider {
  -webkit-appearance: none;  /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 1rem; /* Specified height */
  outline: #000000; /* Remove outline */
  -webkit-transition: .2s; /* 0.2 seconds transition on hover */
  transition: opacity .2s;
  border-radius: 1rem;
}


</style>