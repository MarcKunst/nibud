export const state = () => ({
    //Debt values
    loanValue: 0,
    prevDuration: 0,
    duration: 0,

    //Income values
    job: 0,
    healthCareAllowance: 0,
    housingAllowance: 0,
    parents: 0,
    othersIncome: 0,

    //Expenses
    tuitionFeesCost: 0,
    housingCost: 0,
    healthInsuranceCost: 0,
    phoneCost: 0,
    groceriesCost: 0,
    clothingCost: 0,
    leasureCost: 0,
    othersCost: 0

})

export const getters = {
    //Debt getters
    loanValue: (state) => state.loanValue,
    prevDuration: (state) => state.prevDuration,

    //Income getters
    job: (state) => state.job,
    healthCareAllowance: (state) => state.healthCareAllowance,
    housingAllowance: (state) => state.housingAllowance,
    parents: (state) => state.parents,

    //Expenses getters
    tuitionFeesCost: (state) => state.tuitionFeesCost,
    housingCost: (state) => state.housingCost,
    healthInsuranceCost: (state) => state.healthInsuranceCost,
    phoneCost: (state) => state.phoneCost,
    groceriesCost: (state) => state.groceriesCost,
    clothingCost: (state) => state.clothingCost,
    leasureCost: (state) => state.leasureCost,

}

export const actions = {
    //Debt actions
    setLoan({commit}, value) {
        commit('loanMutation', value)
    },
    setPrevDuration({commit}, value) {
        commit('prevMutation', value)
    },

    //Income actions
    setJob({commit}, value) {
        commit('updateJob', value)
    },
    setHealthCareAllowance({commit}, value) {
        commit('updateHealthCareAllowance', value)
    },
    setHousingAllowance({commit}, value) {
        commit('updateHousingAllowance', value)
    },
    setParents({commit}, value) {
        commit('updateParents', value)
    },

    //Expenses actions
    setTuitionFeesCost({commit}, value) {
        commit('updateTuitionFeesCost', value)
    },
    setHousingCost({commit}, value) {
        commit('updateHousingCost', value)
    },
    setHealthInsuranceCost({commit}, value) {
        commit('updateHealthInsuranceCost', value)
    },
    setPhoneCost({commit}, value) {
        commit('updatePhoneCost', value)
    },
    setGroceriesCost({commit}, value) {
        commit('updateGroceriesCost', value)
    },
    setClothingCost({commit}, value) {
        commit('updateClothingCost', value)
    },
    setLeasureCost({commit}, value) {
        commit('updateLeasureCost', value)
    },
}

export const mutations = {
    //Debt mutations
    loanMutation: (state, value) => (state.loanValue = value),
    prevMutation: (state, value) => (state.prevDuration = value),
    updateDuration: (state, duration) => (state.duration = duration),

    //Income mutations
    updateJob: (state, number) => (state.job = number),
    updateHealthCareAllowance: (state, number) => (state.healthCareAllowance = number),
    updateHousingAllowance: (state, number) => (state.housingAllowance = number),
    updateParents: (state, number) => (state.parents = number),

    //Expenses mutations
    updateTuitionFeesCost: (state, number) => (state.tuitionFeesCost = number),
    updateHousingCost: (state, number) => (state.housingCost = number),
    updateHealthInsuranceCost: (state, number) => (state.healthInsuranceCost = number),
    updatePhoneCost: (state, number) => (state.phoneCost = number),
    updateGroceriesCost: (state, number) => (state.groceriesCost = number),
    updateClothingCost: (state, number) => (state.clothingCost = number),
    updateLeasureCost: (state, number) => (state.leasureCost = number),
}