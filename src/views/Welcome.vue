<template>
  <div>
    <form @submit.prevent="logoutSesion">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <button class="btn btn-lg btn-info btn-block">Logout</button>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <h1 class="mt-5 text-center">Listado de Posts</h1>

      <div class="container mt-5">
        <b-card-group deck class="mb-3" v-for="(post, index) in posts" :key="index">
          <b-card border-variant="dark" class="text-center" :header="post.title">
            <b-card-text>{{post.body}}</b-card-text>
          </b-card>
        </b-card-group>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Welcome",
  data() {
    return {
      posts: []
    };
  },

  created() {
    this.validateToken();
    this.getPosts();
  },

  methods: {
    validateToken(){
      if(localStorage.getItem('token') === null){
        this.$router.push({ name: 'login' });
      }
    },

    getPosts() {
      axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
        this.posts = res.data;
      });
    },

    logoutSesion(){
      localStorage.removeItem('token')
      this.$router.push({ name: 'login' });
    }
  }
};
</script>


