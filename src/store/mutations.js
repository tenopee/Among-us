export const state = {
  imposterNumber: 1
}

export const mutations = {
  countImposter: (state, array) => {
    let currentImposterNumber = Math.max.apply(null, Number(array))
    state.imposterNumber = currentImposterNumber
  }
}
