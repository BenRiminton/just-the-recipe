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
                console.log(result);
                const recipes = result.data.results;
                const recipeArray = [];
                recipes.forEach((recipe) => {
                    const recipeObj = recipe;
                    recipeObj.url = `/recipe/${recipe._id}`;
                    recipeArray.push(recipeObj);
                });
                console.log(recipeArray);
                this.recipes = recipeArray;
            });
        },
        handleClick() {
            console.log(this.recipes);
        },
    },
    mounted() {
        console.log('mounted');
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

    .flex-grid>.recipe-card {
        flex-basis: 25%;
    }
    a, a:hover {
        color:#FFFFFF;
        text-decoration: none;
    }
</style>
