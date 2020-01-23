<template>
    <section>
        <h2>jouw verwachte studieschuld:</h2>
        <div class="debt-circle-smaller" 
            v-if="this.$store.state.job + 
            this.$store.state.healthCareAllowance + 
            this.$store.state.housingAllowance + 
            this.$store.state.parents +
            this.$store.state.othersIncome 
            <= 
            this.$store.state.tuitionFeesCost + 
            this.$store.state.housingCost + 
            this.$store.state.healthInsuranceCost + 
            this.$store.state.phoneCost +
            this.$store.state.groceriesCost +
            this.$store.state.clothingCost +
            this.$store.state.leasureCost +
            this.$store.state.othersCost">
            <span class="text-smaller">&euro;{{incomeCalc}}</span>
        </div>
        <div class="debt-circle-bigger"
        v-if="this.$store.state.job + 
            this.$store.state.healthCareAllowance + 
            this.$store.state.housingAllowance + 
            this.$store.state.parents +
            this.$store.state.othersIncome 
            > 
            this.$store.state.tuitionFeesCost + 
            this.$store.state.housingCost + 
            this.$store.state.healthInsuranceCost + 
            this.$store.state.phoneCost +
            this.$store.state.groceriesCost +
            this.$store.state.clothingCost +
            this.$store.state.leasureCost +
            this.$store.state.othersCost">
            <span class="text-bigger">&euro;{{incomeCalc}}</span>
        </div>

        <h2>Gemiddelde studieschuld:</h2>
        <div class="average-circle-smaller"
        v-if="this.$store.state.job + 
            this.$store.state.healthCareAllowance + 
            this.$store.state.housingAllowance + 
            this.$store.state.parents +
            this.$store.state.othersIncome 
            >=
            this.$store.state.tuitionFeesCost + 
            this.$store.state.housingCost + 
            this.$store.state.healthInsuranceCost + 
            this.$store.state.phoneCost +
            this.$store.state.groceriesCost +
            this.$store.state.clothingCost +
            this.$store.state.leasureCost +
            this.$store.state.othersCost">
            <span class="text-smaller">&euro;{{expensesCalc}}</span>
        </div>
        <div class="average-circle-bigger"
        v-if="this.$store.state.job + 
            this.$store.state.healthCareAllowance + 
            this.$store.state.housingAllowance + 
            this.$store.state.parents +
            this.$store.state.othersIncome 
            < 
            this.$store.state.tuitionFeesCost + 
            this.$store.state.housingCost + 
            this.$store.state.healthInsuranceCost + 
            this.$store.state.phoneCost +
            this.$store.state.groceriesCost +
            this.$store.state.clothingCost +
            this.$store.state.leasureCost +
            this.$store.state.othersCost">
            <span class="text-bigger">&euro;{{expensesCalc}}</span>
        </div>
    </section>
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
        },
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
    background: linear-gradient(#A32B75, #99135F);
    border-radius: 8rem;
    width: 6rem;
    height: 6rem;
    margin: 0.8rem 0;
}

.debt-circle-bigger {
    background: linear-gradient(#A32B75, #99135F);
    border-radius: 8rem;
    width: 10rem;
    height: 10rem;
    margin: 0.8rem 0;
}

.average-circle-smaller {
    background: linear-gradient(#7F89AD, #6F79AA);
    border-radius: 8rem;
    width: 6rem;
    height: 6rem;
    margin: 0.8rem 0;
}

.average-circle-bigger {
    background: linear-gradient(#7F89AD, #6F79AA);
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