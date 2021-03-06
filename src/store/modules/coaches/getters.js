// https://vuex.vuejs.org/guide/getters.html
export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    // Note: empty array is truthy
    return state.coaches && state.coaches.length > 0;
  },
  // underscores is a convention to signal to linter that have to take these args but deliberately not using them
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    return coaches.some(coach => coach.id === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    // True if more than a minute ago
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  }
};
