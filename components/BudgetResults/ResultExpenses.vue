<template>
    <div class="expenses-container">
        <h2>Uitgaven</h2>
        <span>&euro;{{ expensesCalc }}</span>
    </div>
</template>

<script>
export default {
     computed: {
        expensesCalc() {
            return this.$store.state.tuitionFeesCost + 
            this.$store.state.housingCost + 
            this.$store.state.healthInsuranceCost + 
            this.$store.state.phoneCost +
            this.$store.state.groceriesCost +
            this.$store.state.clothingCost +
            this.$store.state.leasureCost +
            this.$store.state.othersCost
        }
    }
}
</script>

<style scoped>

.expenses-container {
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