<template>
    <section>
        <h2>jouw studieschuld</h2>
        <div class="debt-circle">
            <span>&euro;{{debtCalc}}</span>
        </div>
    </section>
</template>

<script>

export default {
    
    computed: {
        debtCalc() {
            return (this.$store.state.prevDuration + this.$store.state.duration) * this.$store.state.loanValue
        }
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

.debt-circle {
    background: linear-gradient(#3780AB, #9DAEB6);
    border-radius: 8rem;
    width: 10rem;
    height: 10rem;
    margin: 0.8rem 0;
}

span {
    color: #fdfdfd;
    text-align: center;
    width: 100%;
    display: block;
    margin: 4rem 0;
    font-family: 'Bangers', cursive;
    font-size: 2rem;
}
</style>