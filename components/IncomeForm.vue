<template>
    <div class="form-container">
        <form>
            <legend>Inkomsten</legend>
                <label>Bijbaan</label>
                <button class="i-button" type="button" v-on:click="show = !show"></button>
                <p v-bind:class="toggleClass">
                    Gemiddeld wordt er €417 per maand verdient door studenten. 
                </p>
                <input type="text" name="bijbaan"/>
                <label>Zorgtoeslag</label>
                <button class="i-button" type="button" v-on:click="show1 = !show1"></button>
                <p v-bind:class="toggleClass">
                    De meeste studenten krijgen maximale zorgtoeslag. Yes! Dat is zo’n €104 per maand. Wil je meer weten over zorgtoeslag? Kijk op toeslagen.nl 
                </p>
                <input type="text" name="bijbaan"/>
                <label>Huurtoeslag</label>
                <button class="i-button" type="button" v-on:click="show2 = !show2"></button>
                <p v-bind:class="toggleClass">
                    Sommige studenten kunnen huurtoeslag krijgen. Maak er gebruik van!  Dit bedrag kan oplopen tot €354 per maand. Dat scheelt weer een hoop!  Wil je meer weten over huurtoeslag? Neem dan een kijkje op toeslagen.nl
                </p>
                <input type="text" name="bijbaan"/>
                <label>Bijdrage ouders</label>
                <input type="text" name="bijbaan"/>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
        show: true
        }
    },
    computed: {
        toggleClass: function(){
            return {
                show: this.show
            }
        }
    }
}
</script>

<style scoped>

button {
    height: 1.5rem;
    width: 1.5rem;
    background-image: url(../assets/info.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: none;
    border-radius: 1rem;
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

legend {
    font-size: 1.5rem;
    font-weight: 600;
    color: #fdfdfd;
    margin: 1rem 0;
}

label {
    font-size: 0.9rem;
    font-weight: 400;
    color: #fdfdfd;
}

input {
    margin: 0.5rem 0 1.5rem;
    width: 100%;
    height: 2rem;
}

</style>