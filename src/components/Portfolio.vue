<template>
    <div id="portfolio">
        <b-container class="bv-example-row">
            <b-row class="justify-content-md-center" align-v="center">
                <b-col sm="6">
                    <b-img fluid alt="Responsive image"><img v-img:my-group src="../assets/project/APS_Perspective.jpg"></b-img></b-col>
                <b-col sm="6">
                    <img v-img:my-group src="../assets/project/PERS COEUR ILOT.jpg"></b-col>
                <b-col sm="6">
                    <img v-img:my-group src="../assets/project/NOVO_perspective_N1.jpg"></b-col>
                <b-col sm="6">
                    <img v-img:my-group src="../assets/project/NOVO_perspective_N0.jpg"></b-col>
                <b-col sm="6">
                    <img v-img:my-group src="../assets/project/BREST_RPA_RE_DAY_04.jpg"></b-col>
                <b-col sm="6">
                    <img v-img:my-group src="../assets/project/BREST_RPA_RE_NIGHT_07.jpg"></b-col>
            </b-row>
        </b-container>
    </div>

</template>

<script>
    export default {
        name: 'portfolio'
    }
</script>
<!-- styling for the component -->
<style>
    #portfolio {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }
</style>