<template>
    <div class="form-container">
        <form>
            <legend>Uitgaven</legend>
                <TuitionFees />
                <HousingCost />
                <HealthInsuranceCost />
                <PhoneCost />
                <GroceriesCost />
                <ClothingCost />
                <LeasureCost />
        </form>
    </div>
</template>

<script>
import TuitionFees from '~/components/ExpensesFields/TuitionFees.vue'
import HousingCost from '~/components/ExpensesFields/HousingCost.vue'
import HealthInsuranceCost from '~/components/ExpensesFields/HealthInsuranceCost.vue'
import PhoneCost from '~/components/ExpensesFields/PhoneCost.vue'
import GroceriesCost from '~/components/ExpensesFields/GroceriesCost.vue'
import ClothingCost from '~/components/ExpensesFields/ClothingCost.vue'
import LeasureCost from '~/components/ExpensesFields/LeasureCost.vue'

export default {
    components: {
        TuitionFees,
        HousingCost,
        HealthInsuranceCost,
        PhoneCost,
        GroceriesCost,
        ClothingCost,
        LeasureCost
    }
}
</script>

<style scoped>

form {
    display: flex;
    justify-content: left;
    flex-direction: column;
}

legend {
    font-size: 1.5rem;
    font-weight: 600;
    color: #fdfdfd;
    margin: 1rem 0;
}

</style>