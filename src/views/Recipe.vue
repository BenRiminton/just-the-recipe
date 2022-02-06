<template>
    <nav aria-label="breadcrumb" style="padding-left:20px;color:#ffffff;">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item"><router-link to="/recipes">Recipes</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">{{recipe.name}}</li>
        </ol>
    </nav>
    <h2>{{recipe.name}}</h2>
    <img class="header-image" :src="recipe.imageURL" />

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
        max-height:480px;
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

        .header-image {
            max-width:350px;
        }
    }
</style>
