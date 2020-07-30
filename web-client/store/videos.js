const initState = () => ({
  uploadPromise: null
});

export const state = initState

export const mutations = {
  setTask(state, {uploadPromise}) {
    state.uploadPromise = uploadPromise
  },
  reset(state) {
    Object.assign(state, initState())
  }
}

// context - first param
export const actions = {
  startVideoUpload({commit, dispatch}, {form}) {
    const uploadPromise = this.$axios.$post("http://localhost:5000/api/videos", form);
    commit('setTask', {uploadPromise});
  }
}
