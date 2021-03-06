﻿const initState = () => ({
  tricks: []
});

export const state = initState

export const mutations = {
  setTricks(state, {tricks}) {
    state.tricks = tricks
  },
  reset(state) {
    Object.assign(state, initState())
  }
}

// context - first param
export const actions = {
  async fetchTricks({commit}) {
    const tricks = await this.$axios.$get("http://localhost:5000/api/tricks");
    console.log("tricks", tricks);
    commit("setTricks", {tricks});
  },
  async createTrick({commit, dispatch}, {trick}) {
    await this.$axios.post("http://localhost:5000/api/tricks" ,trick);
    await dispatch('fetchTricks');
  }
}
