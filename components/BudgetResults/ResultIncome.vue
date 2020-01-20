<template>
    <div class="income-container">
        <h2>Inkomsten</h2>
        <span>&euro;{{ incomeCalc }}</span>
    </div>
</template>

<script>
export default {
     computed: {
        incomeCalc() {
            return this.$store.state.job + 
            this.$store.state.healthCareAllowance + 
            this.$store.state.housingAllowance + 
            this.$store.state.parents +
            this.$store.state.othersIncome
        }
    }
}
</script>

<style scoped>

.income-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
}

h2 {
    color: #fdfdfd;
    font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
}

span {
    color: #fdfdfd;
    font-family: 'Bangers', cursive;
    font-size: 3rem;
}

</style>