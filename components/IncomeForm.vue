<template>
    <div class="form-container">
        <form>
            <legend>Inkomsten</legend>
                <InputJob />
                <InputHealthCareAllowance />
                <InputHousingAllowance />
                <InputParents />
        </form>
    </div>
</template>

<script>
import InputJob from '~/components/IncomeFields/InputJob.vue'
import InputHealthCareAllowance from '~/components/IncomeFields/InputHealthCareAllowance.vue'
import InputHousingAllowance from '~/components/IncomeFields/InputHousingAllowance.vue'
import InputParents from '~/components/IncomeFields/InputParents.vue'

export default {
    components: {
        InputJob,
        InputHealthCareAllowance,
        InputHousingAllowance,
        InputParents
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