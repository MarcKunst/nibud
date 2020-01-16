export const state = () => ({
    loanValue: 0,
    currentDebt: 0,
    duration: 0
})

export const getters = {
    loanValue: (state) => state.loanValue
}

export const actions = {
    setLoan({commit}, value) {
        commit('loanMutation', value)
    }
}

export const mutations = {
    loanMutation: (state, value) => (state.loanValue = value)
}