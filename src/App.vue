<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import db from "./configs/firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

// console.log(db);
// async function getCities(db) {
//   const usersCol = collection(db, "users");
//   const usersSnapshot = await getDocs(usersCol);
//   const usersList = usersSnapshot.docs.map((doc) => doc.data());
//   console.log(usersList);
//   return usersList;
// }

// getCities(db);
const store = useStore();

const count = computed(() => store.state.count.count);
const posts = computed(() => store.getters["posts/allPosts"]);
const lengthPosts = computed(() => store.getters["posts/postCount"]);

const handleIncrement = () => {
  store.dispatch("count/increment");
};

const handleDecrement = () => {
  store.dispatch("count/decrement");
};

onMounted(async () => {
  store.dispatch("posts/fetchPosts");
});
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <p>{{ count }}</p>

      <button @click="handleIncrement">Increment</button>
      <button @click="handleDecrement">Decrement</button>
      <div>
        <div class="posts">
          <h2>Posts</h2>
          <h2>{{ lengthPosts }}</h2>
          <ul>
            <li v-for="post in posts" :key="post.id">
              <RouterLink :to="{ name: 'DetailPost', params: { id: post.id } }"> {{ post.title }}</RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
.posts {
  margin-top: 2rem;
  height: 500px;
  overflow-y: auto;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
