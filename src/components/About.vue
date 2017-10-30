<template>
    <div id="about">
        <b-img center :src="require('./assets/forest.jpg')" fluid alt="Responsive image"/>
        <h1>Panoramik vous accompagne dans vos projets par la réalisation
            d'images de synthèse pour:
            Architectes & designers / Investissement immobilier / Publicité / Privé
            ​
            Le studio adopte une approche sensible dans la contextualisation et l'ambiance de vos projets. Le traitement des images visent à créer un sentiment global et unique.</h1>
        <h2>contact.studiopanoramik@gmail.com</h2>
    </div>


</template>

<script>
    export default {
        name: 'about'
    }
</script>
<!-- styling for the component -->
<style>
    #about {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        margin-right: 60px;
        margin-left: 60px;
    }