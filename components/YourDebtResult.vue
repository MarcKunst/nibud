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
    data() {
        return {
            yourDebt: "100"
        }
    },
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
    margin-top: 2rem;

}

.debt-circle {
    background: linear-gradient(#860034, #BA84A7);
    border-radius: 8rem;
    width: 10rem;
    height: 10rem;
    margin: 1rem 0;
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