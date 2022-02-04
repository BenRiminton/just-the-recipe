<template>
    <nav aria-label="breadcrumb" style="padding-left:20px;color:#ffffff;">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item active">Recipes</li>
        </ol>
    </nav>

    <div class="flex-grid">
        <RecipeCard v-for="recipe in recipes"
        :key="recipe._id"
        :recipe="recipe" />
    </div>
</template>
<script>
import axios from 'axios';
import RecipeCard from './RecipeCard.vue';

export default {
    components: {
        RecipeCard,
    },
    data() {
        return {
            recipes: [],
        };
    },
    methods: {
        fetchRecipes() {
            axios.get('https://boiling-ravine-78507.herokuapp.com/api/recipes').then((result) => {
                const recipes = result.data.results;
                const recipeArray = [];
                recipes.forEach((recipe) => {
                    const recipeObj = recipe;
                    recipeObj.url = `/recipe/${recipe._id}`;
                    recipeArray.push(recipeObj);
                });
                this.recipes = recipeArray;
            });
        },
        handleClick() {
        },
    },
    mounted() {
        this.fetchRecipes();
    },
};
</script>
<style scoped>

    .flex-grid {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
        row-gap:20px;
    }

    a, a:hover {
        color:#222;
        text-decoration: none;
    }
</style>
