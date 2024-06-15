const state = () => ({
    posts: [],
    post: {}
})

const getters = {
    allPosts: (state) => state.posts,
    postCount: (state) => state.posts.length,
    getTenPosts: (state) => state.posts.slice(0, 10),
    getPostById: (state) => state.post
}

const actions = {
    async fetchPosts({ commit }) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()
        commit('setPosts', posts)
    },
    async fetchPost({ commit }, id) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const post = await response.json()
        commit('setPost', post)
    }
}

const mutations = {
    setPosts: (state, posts) => (state.posts = posts),
    setPost: (state, post) => (state.post = post)


}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}