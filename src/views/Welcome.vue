<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item rigth :to="{name: 'login'}">Logout</b-nav-item>
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
    this.getPosts();
  },

  methods: {
    getPosts() {
      axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
        this.posts = res.data;
      });
    }
  }
};
</script>


