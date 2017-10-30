<template>
    <div id="portfolio">
        <b-container fluid class="p-4 bg-dark">
            <b-row>
                <b-col>
                    <img v-img:my-group src="../assets/project/APS_Perspective.jpg">
                </b-col>
                <b-col>
                    <img v-img:my-group src="../assets/project/PERS COEUR ILOT.jpg">
                </b-col>
                <b-col>
                    <img v-img:my-group src="../assets/project/NOVO_perspective_N1.jpg">
                </b-col>
                <b-col>
                    <img v-img:my-group src="../assets/project/NOVO_perspective_N0.jpg">
                </b-col>
                <b-col>
                    <img v-img:my-group src="../assets/project/BREST_RPA_RE_DAY_04.jpg">
                </b-col>
                <b-col>
                    <img v-img:my-group src="../assets/project/BREST_RPA_RE_NIGHT_07.jpg">
                </b-col>
            </b-row>
        </b-container>
    </div>

</template>

<script>
    export default {
        name: 'portfolio'
    }
</script>
