<template>
  <div id="app" class="header">
      <b-container class="bv-example-row">
          <b-row class="justify-content-md-center" align-v="center">
              <b-col><router-link v-bind:to="'/portfolio'">Portfolio</router-link></b-col>
              <b-col><b-img center src="./assets/logo.png" fluid alt="Responsive image" /></b-col>
              <b-col><router-link v-bind:to="'/about'">Contact</router-link></b-col>
          </b-row>
      </b-container>
      <div v-masonry transition-duration="0.3s" item-selector=".card">
          <div v-masonry-tile class="item" v-for="(collection, index) in collections">
              <card :key="collection.imageId" :collection="collection"></card>
          </div>
      </div>
    <router-view/>
  </div>
</template>

<script>

    import cloudinary from 'cloudinary-core';
    import data from './db.json';

    import Card from './components/Card';

    export default {
        name: 'app',
        data() {
            return {
                cloudinary: null,
                collections: []
            }
        },
        created() {
            this.cloudinary = cloudinary.Cloudinary.new({
                cloud_name: 'panoramik'
            })
            this.collections = data.map(this.transform);
        },
        methods: {
            transform(collection) {
                const imageUrl =
                    this.cloudinary.url(collection.imageId, { height: 150, crop: "fit", quality: 'auto'});
                return Object.assign(collection, { imageUrl });
            }
        },
        components: {
            Card
        }
    }
</script>

<style>
    body {
        margin: 0;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
    main {
        text-align: center;
        margin-top: 40px;
    }
    header {
        margin: 0;
        height: 56px;
        padding: 0 16px 0 24px;
        background-color: #35495E;
        color: #ffffff;
    }
    header span {
        display: block;
        position: relative;
        font-size: 20px;
        line-height: 1;
        letter-spacing: .02em;
        font-weight: 400;
        box-sizing: border-box;
        padding-top: 16px;
    }
    .cards {
        column-count: 2;
        column-gap: 1em;
    }
    .wrapper {
        padding: 15px;
    }
    @media only screen and (min-width: 500px) {
        .cards {
            column-count: 2;
        }
    }
    @media only screen and (min-width: 700px) {
        .cards {
            column-count: 3;
        }
    }
    @media only screen and (min-width: 900px) {
        .cards {
            column-count: 4;
        }
    }
    @media only screen and (min-width: 1100px) {
        .cards {
            column-count: 5;
        }
    }
</style>
