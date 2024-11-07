<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div class="container">
        <router-link class="navbar-brand" to="/">Adi's Dashboard</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/blog">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/goals">Goals</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
    <div v-if="!isLoggedIn" class="row">
      <div class="col-md-6 offset-md-3 py-5">
        <h1>Greetings Adi</h1>
        <div class="button-group">
          <a href="https://github.com/adityabilawar" target="_blank" class="btn btn-primary">GitHub</a>
          <a href="https://linkedin.com/in/adityabilawar" target="_blank" class="btn btn-primary">LinkedIn</a>
          <a href="https://devpost.com/adityabilawar" target="_blank" class="btn btn-primary">Devpost</a>
        </div>

        <form v-on:submit.prevent="Login_pass">
            <div class="form-group">
            <label for="password">Password:</label>
            <input v-model="password" type="password" id="password" placeholder="Enter Password" class="form-control">
            </div>
          <div class="form-group">
            <button class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
    <Home v-if="isLoggedIn" />
  </div>
</div>
</template>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';

.navbar {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card {
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border: none;
  border-radius: 8px;
}

.card-header {
  background-color: #f8f9fa;
  border-bottom: 1px solid #eee;
  font-weight: 600;
}
</style>

<script>
import axios from 'axios'; 

import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  },
  data() {
    return {
      password: '',
      isLoggedIn: false
    };
  },

  methods: {
    Login_pass() { 
      console.log(`Logging you in `);
      //make post request to the server


/**
 * The main difference between POST requests and GET requests is how the data is sent to the server.
 * 
 * - POST requests send data in the request body, which is typically used for creating or updating resources on the server.
 * - GET requests send data in the URL query parameters, which is typically used for retrieving resources from the server.
 * 
 * When it comes to creating a login system, it is generally recommended to use a POST request. This is because the password should be treated as sensitive information and should not be included in the URL or query parameters, 
 * as it can be easily visible and accessible. By sending the password in the request body of a POST request, the data is encrypted and better protected.
 * 
 * Therefore, in this case, it is better to use a POST request for the login system.
 */
      axios.post("http://localhost:3000/api/login", {password: this.password})
        .then((response) => {
          if(response.data == "Login successful") {
            console.log(`Login successful`);
            this.isLoggedIn = true;

          } else {
            console.log(`Incorrect password, please try again`);
          }
        })
        .catch((error) => {
          window.alert(`Error: ${error}`);
        });
    },
  },
};
</script>
