<template>
    <div id="portfolio">
        <img v-img:my-group src="../assets/project/APS_Perspective.jpg">
        <img v-img:my-group src="../assets/project/PERS COEUR ILOT.jpg">
        <img v-img:my-group src="../assets/project/NOVO_perspective_N1.jpg">
        <img v-img:my-group src="../assets/project/NOVO_perspective_N0.jpg">
        <img v-img:my-group src="../assets/project/BREST_RPA_RE_DAY_04.jpg">
        <img v-img:my-group src="../assets/project/BREST_RPA_RE_NIGHT_07.jpg">
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