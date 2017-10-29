<template>
  <div id="app">
      <b-container class="bv-example-row">
          <b-row class="justify-content-md-center" align-v="center">
              <b-col><router-link v-bind:to="'/portfolio'">Portfolio</router-link></b-col>
              <b-col><b-img center src="./assets/logo.png" fluid alt="Fluid image" /></b-col>
              <b-col><router-link v-bind:to="'/about'">Contact</router-link></b-col>
          </b-row>
      </b-container>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
