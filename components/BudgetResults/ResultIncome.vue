<template>
    <section>
        <h2>Jouw inkomsten:</h2>
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

        <h2>Jouw uitgaven:</h2>
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
    animation: 0.8s ease-in-out 0s 1 small;
}

.debt-circle-bigger {
    background: linear-gradient(#A32B75, #99135F);
    border-radius: 8rem;
    width: 10rem;
    height: 10rem;
    margin: 0.8rem 0;
    animation: 0.8s ease-in-out 0s 1 bigger;
}

.average-circle-smaller {
    background: linear-gradient(#7F89AD, #6F79AA);
    border-radius: 8rem;
    width: 6rem;
    height: 6rem;
    margin: 0.8rem 0;
    animation: 0.8s ease-in-out 0s 1 small;
}

.average-circle-bigger {
    background: linear-gradient(#7F89AD, #6F79AA);
    border-radius: 8rem;
    width: 10rem;
    height: 10rem;
    margin: 0.8rem 0;
    animation: 0.8s ease-in-out 0s 1 bigger;
}

.text-bigger {
    font-size: 2rem;
    margin: 4rem 0;
}

.text-smaller {
    font-size: 1.6rem;
    margin: 2rem 0;
}

@keyframes small {
  0% {
    width: 0rem;
    height: 0rem;
  }

  50% {
    width: 6.5rem;
    height: 6.5rem;
  }
  100% {
    width: 6rem;
    height: 6rem;
  }
}

@keyframes bigger {
  0% {
    width: 0rem;
    height: 0rem;
  }

  50% {
    width: 10.5rem;
    height: 10.5rem;
  }
  100% {
    width: 10rem;
    height: 10rem;
  }
}
</style>