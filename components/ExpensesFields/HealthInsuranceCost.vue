<template>
    <div>
        <label>Zorgverzekering</label>
        <button type="button" v-on:click="show = !show"></button>
        <p v-bind:class="toggleClass">
            Als je je zorgverzekering zelf betaald, is dat ongeveer €106 per maand. You go!
        </p>
        <span>&euro; </span><input type="number" :min="0" v-model.number="number" @change="numberHandler"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
        show: true,
        number: null
        }
    },
    computed: {
        ...mapGetters(['healthInsuranceCost']),
        toggleClass: function(){
            return {
                show: this.show
            }
        }
    },
    methods: {
        numberHandler() {
            this.$store.dispatch('setHealthInsuranceCost', this.number)
        }
    }
}
</script>

<style scoped>

button {
    height: 1.4rem;
    width: 1.4rem;
    background-image: url(../../assets/info.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: none;
    border-radius: 1rem;
    padding-top: 0.5rem;
}

p {
    visibility: visible;
    font-size: 0.8rem;
    color: #fdfdfd;
    transition: margin 0.5s ease;
    margin: 1rem 0;
    display: block;
}

.show{
    visibility: hidden;
    margin: 0;
    height: 0;
}

label {
    font-size: 0.9rem;
    font-weight: 400;
    color: #fdfdfd;
}

input {
    margin: 0.5rem 0 1.5rem;
    width: 90%;
    height: 1.8rem;
    font-size: 0.8rem;
    color: #000000;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
}

input[type=number] {
  -moz-appearance: textfield;
}

span {
    color: #fdfdfd;
    font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
}

</style>