<template>
    <nav aria-label="breadcrumb" style="padding-left:20px;color:#ffffff;">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Add a recipe</li>
        </ol>
    </nav>
    <div class="recipe-container">
        <TextInput name="name"
                   label="Recipe Name"
                   @inputchange="handleInput" />
        <TextInput name="imageURL"
                   label="Recipe Image URL"
                   @inputchange="handleInput" />
        <TextInput name="ingredients"
                   variant="textarea"
                   label="Ingredients"
                   helpText="Please put each ingredient on a separate line."
                   @inputchange="handleInput" />
        <TextInput name="steps"
                   variant="textarea"
                   label="Method"
                   helpText="Please put each step on a separate line."
                   @inputchange="handleInput" />
        <button type="button"
                class="btn btn-dark"
                @click="handleSubmit">Submit Recipe</button>
    </div>
</template>
<script>
import axios from 'axios';

import TextInput from '../components/TextInput.vue';

export default {
    components: {
        TextInput,
    },
    data() {
        return {
            recipe: {},
        };
    },
    methods: {
        handleInput(event) {
            const { name, value } = event;
            if (name === 'ingredients' || name === 'steps') {
                this.recipe[name] = value.split('\n');
            } else {
                this.recipe[name] = value;
            }
        },
        handleIngredientChange(event) {
            const { value } = event.target;
            this.recipe.ingredients = value.split('\n');
        },
        handleSubmit() {
            console.log(this.recipe);
            axios.post('https://boiling-ravine-78507.herokuapp.com/api/recipe', this.recipe)
                .then((result) => {
                    console.log('result', result);
                })
                .catch((error) => {
                    console.log('error', error);
                });
        },
    },
    emits: ['input'],
};
</script>
<style scoped>
a {
    color:#111;
    text-decoration: none;
}
label {
    padding-right: 20px;
}

.recipe-container {
        display:flex;
        flex-direction: column;
        max-width:860px;
        margin:auto;
        padding-top:30px;
        text-align: left;
        gap:20px;
}

@media only screen and (max-width: 860px) {
    .recipe-container {
        padding-left:20px;
        padding-right:20px;
    }
}

</style>
