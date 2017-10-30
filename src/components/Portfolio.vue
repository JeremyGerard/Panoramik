<template>
    <div id="portfolio">
        <b-container class="bv-example-row">
            <b-row>
                <b-col><img v-img:my-group src="../assets/project/APS_Perspective.jpg"></b-col>
                <b-col><img v-img:my-group src="../assets/project/PERS COEUR ILOT.jpg"></b-col>
                <b-col><img v-img:my-group src="../assets/project/NOVO_perspective_N1.jpg"></b-col>
                <b-col><img v-img:my-group src="../assets/project/NOVO_perspective_N0.jpg"></b-col>
                <b-col><img v-img:my-group src="../assets/project/BREST_RPA_RE_DAY_04.jpg"></b-col>
                <b-col><img v-img:my-group src="../assets/project/BREST_RPA_RE_NIGHT_07.jpg"></b-col>
            </b-row>
        </b-container>

        <div>
            <b-img-lazy src="https://lorempixel.com/600/400/cats/1/" center fluid-grow width="600" height="400" blank-color="#bbb" alt="img" class="my-5" />
            <b-img-lazy src="https://lorempixel.com/600/400/cats/3/" center fluid-grow width="600" height="400" blank-color="#bbb" alt="img" class="my-5" />
            <b-img-lazy src="https://lorempixel.com/600/400/cats/4/" center fluid-grow width="600" height="400" blank-color="#bbb" alt="img" class="my-5" />
            <b-img-lazy src="https://lorempixel.com/600/400/cats/5/" center fluid-grow width="600" height="400" blank-color="#bbb" alt="img" class="my-5" />
            <b-img-lazy src="https://lorempixel.com/600/400/cats/6/" center fluid-grow width="600" height="400" blank-color="#bbb" alt="img" class="my-5" />
            <b-img-lazy src="https://lorempixel.com/600/400/cats/7/" center fluid-grow width="600" height="400" blank-color="#bbb" alt="img" class="my-5" />
            <b-img-lazy src="https://lorempixel.com/600/400/cats/8/" center fluid-grow width="600" height="400" blank-color="#bbb" alt="img" class="my-5" />
            <b-img-lazy src="https://lorempixel.com/600/400/cats/9/" center fluid-grow width="600" height="400" blank-color="#bbb" alt="img" class="my-5" />
            <b-img-lazy src="https://lorempixel.com/600/400/cats/10/" center fluid-grow width="600" height="400" blank-color="#bbb" alt="img" class="my-5" />
        </div>


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