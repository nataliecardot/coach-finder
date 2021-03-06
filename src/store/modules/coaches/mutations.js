// Mutations: clearly defined methods that have logic to update state. Should trigger these mutations to update state rather than manipulating it directly. By triggering mutations, all components that want to edit state do it in the same way, guaranteed
export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },
  setCoaches(state, payload) {
    state.coaches = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  }
};
