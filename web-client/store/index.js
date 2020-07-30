const initState = () => ({});

export const state = initState

export const mutations = {
  reset(state) {
    Object.assign(state, initState())
  }
}

// context - first param
export const actions = {
  async nuxtServerInit({commit, dispatch}) {
    await dispatch("tricks/fetchTricks");
  }
}
