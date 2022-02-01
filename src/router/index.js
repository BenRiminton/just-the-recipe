import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Recipes from '../views/Recipes.vue';
import NewRecipe from '../views/NewRecipe.vue';
import Recipe from '../views/Recipe.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/recipes',
        name: 'Recipes',
        component: Recipes,
    },
    {
        path: '/new',
        name: 'New Recipe',
        component: NewRecipe,
    },
    {
        path: '/recipe/:recipeId',
        name: 'Recipe',
        component: Recipe,
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
