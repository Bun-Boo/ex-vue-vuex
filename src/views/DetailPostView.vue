<template>
  <div>
    <h1>{{ id }}</h1>
    <h1>{{ post.title }}</h1>
    <p>{{ post.userId }}</p>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { watch } from "vue";

export default {
  name: "DetailPostView",

  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const id = computed(() => props.id);
    const fetchPost = async (postId) => {
      await store.dispatch("posts/fetchPost", postId);
    };

    onMounted(async () => {
      fetchPost(id.value);
    });
    watch(id, (newId) => {
      fetchPost(newId);
    });

    const post = computed(() => store.getters["posts/getPostById"]);

    return {
      post
    };
  },
};
</script>

<style lang="scss" scoped>
</style>