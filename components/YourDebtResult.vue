<template>
    <section>
        <h2>jouw studieschuld</h2>
        <div class="debt-circle-smaller" v-if="(this.$store.state.prevDuration + this.$store.state.duration) * this.$store.state.loanValue < 13100">
            <span class="text-smaller">&euro;{{debtCalc}}</span>
        </div>
        <div class="debt-circle-bigger" v-else="(this.$store.state.prevDuration + this.$store.state.duration) * this.$store.state.loanValue > 13100">
            <span class="text-bigger">&euro;{{debtCalc}}</span>
        </div>
    </section>
</template>

<script>

export default {
    computed: {
        debtCalc() {
            return (this.$store.state.prevDuration + this.$store.state.duration) * this.$store.state.loanValue
        }
    },
    methods() {
        const bubble = document.querySelector(div)
        const classList = bubble.classList()
        
        
    }
}
</script>

<style scoped>

section {
    display: flex;
    flex-direction: column;
     align-items: center;
}

h2 {
    font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
    text-align: center;
    color: #fdfdfd;
    font-size: 1rem;
    margin-top: 1.5rem;

}

span {
    color: #fdfdfd;
    text-align: center;
    width: 100%;
    display: block;
    margin: 3rem 0;
    font-family: 'Bangers', cursive;
    font-size: 1.8rem;
}

.debt-circle-smaller {
    background: linear-gradient(#3780AB, #9DAEB6);
    border-radius: 8rem;
    width: 6rem;
    height: 6rem;
    margin: 0.8rem 0;
}

.debt-circle-bigger {
    background: linear-gradient(#3780AB, #9DAEB6);
    border-radius: 8rem;
    width: 10rem;
    height: 10rem;
    margin: 0.8rem 0;
}

.text-bigger {
    font-size: 2rem;
    margin: 4rem 0;
}

.text-smaller {
    font-size: 1.6rem;
    margin: 2rem 0;
}
</style>