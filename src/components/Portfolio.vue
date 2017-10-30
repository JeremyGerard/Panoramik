<template>
    <div id="portfolio">
        <div v-masonry transition-duration="0.3s" item-selector=".item">
            <div v-masonry-tile class="item" v-for="(item, index) in blocks">
                <img v-img:my-group src="../assets/project/APS_Perspective.jpg">
                <img v-img:my-group src="../assets/project/PERS COEUR ILOT.jpg">
                <img v-img:my-group src="../assets/project/NOVO_perspective_N1.jpg">
                <img v-img:my-group src="../assets/project/NOVO_perspective_N0.jpg">
                <img v-img:my-group src="../assets/project/BREST_RPA_RE_DAY_04.jpg">
                <img v-img:my-group src="../assets/project/BREST_RPA_RE_NIGHT_07.jpg">
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'portfolio'
    }
</script>
