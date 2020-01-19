export const state = () => ({
    loanValue: 0,
    prevDuration: 0,
    duration: 0
})

export const getters = {
    loanValue: (state) => state.loanValue,
    prevDuration: (state) => state.prevDuration
}

export const actions = {
    setLoan({commit}, value) {
        commit('loanMutation', value)
    },
    setPrevDuration({commit}, value) {
        commit('prevMutation', value)
    }
}

export const mutations = {
    loanMutation: (state, value) => (state.loanValue = value),
    prevMutation: (state, value) => (state.prevDuration = value),
    updateDuration: (state, duration) => (state.duration = duration)
}