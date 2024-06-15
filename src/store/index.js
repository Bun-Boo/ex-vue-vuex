import { createStore } from "vuex";
import posts from "./modules/posts";
import count from "./modules/count";

const store = createStore({
  modules: {
    posts,
    count
  },
});

export default store;
