<template>
  <div id="app" class="header">
      <b-container class="bv-example-row">
          <b-row class="justify-content-md-center" align-v="center">
              <b-col><router-link v-bind:to="'/portfolio'">Portfolio</router-link></b-col>
              <b-col><b-img center src="./assets/logo.png" fluid alt="Responsive image" /></b-col>
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

<style scoped>
    .header {
        color: black;
        font-family: Helvetica;
        font-style: italic;
        font-size: 16px;
    }
</style>

