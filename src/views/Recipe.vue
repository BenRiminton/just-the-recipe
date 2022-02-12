<template>
    <nav aria-label="breadcrumb" style="padding-left:20px;color:#ffffff;">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item"><router-link to="/recipes">Recipes</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">{{recipe.name}}</li>
        </ol>
    </nav>
    <h2>{{recipe.name}}</h2>
    <div style="max-width:450px;margin: 0px auto;">
        <img class="header-image" :src="recipe.imageURL" />
        <div class="header-text" v-if="recipe.time || recipe.servings">
            <div style="float:left;padding-left:5px;color:#565656;" v-if="recipe.time">
                <ClockIcon size="20" fillColor="#888" style="padding-right:5px;"/>
                <span style="position:relative;top:1px">{{recipe.time}}</span>
            </div>
            <div style="float:right;padding-right:5px;color:#565656;" v-if="recipe.servings">
                <SilverwareIcon size="18" fillColor="#888" style="padding-right:5px;" />
                <span style="position:relative;top:1px">Serves {{recipe.servings}}</span>
            </div>

        </div>
    </div>

    <div class="flex-container">
        <div class="recipe-container">
            <Ingredients v-if="recipe.ingredients && recipe.ingredients.length > 0"
                        class="ingredient-container"
                        :ingredients="recipe.ingredients" />
            <Method v-if="recipe.steps && recipe.steps.length > 0"
                    class="method-container"
                    :steps="recipe.steps" />
<!--             <div class="grid-three-child"></div>
 -->        </div>
    </div>
</template>
<script>
import axios from 'axios';
import ClockIcon from 'vue-material-design-icons/ClockOutline.vue';
import SilverwareIcon from 'vue-material-design-icons/SilverwareVariant.vue';
import Ingredients from './Ingredients.vue';
import Method from './Method.vue';

export default {
    data() {
        return {
            recipe: {},
        };
    },
    components: {
        Ingredients,
        Method,
        ClockIcon,
        SilverwareIcon,
    },
    methods: {
        getRecipe(recipeId) {
            axios.get(`https://boiling-ravine-78507.herokuapp.com/api/recipe/${recipeId}`).then((result) => {
                this.recipe = result.data.result;
            });
        },
    },
    mounted() {
        const { recipeId } = this.$route.params;

        this.getRecipe(recipeId);
    },
};
</script>
<style scoped>

    a,a:hover {
        color:#222;
        text-decoration: none;
    }

    .header-image {
        margin-top:15px;
        border-radius:12px;
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;
        width:100%;
    }

    .recipe-container {
        display:flex;
        max-width:860px;
        margin:auto;
        padding-top:30px;
        gap:20px;
        text-align: left;
    }

    .ingredient-container {
        flex-basis:35%;
    }

    .method-container {
        flex-basis:65%;
    }

    @media only screen and (max-width: 800px) {
        .recipe-container {
            flex-direction: column;
            padding:20px;
        }
    }

    .header-text {
        width:100%;
        height:25px;
        background: #EFEFEF;
        margin:auto;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border: 1px solid #DDD;
    }
</style>
