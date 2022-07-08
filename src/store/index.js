import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth.js";

const store = createStore({
  modules: {
    auth,
  },
  plugins: [createPersistedState()],
});

export default store;

// // Create store
// export default new Vuex.Store({
//   modules: {
//     auth,
//   },
//   plugins: [createPersistedState()],
// });
