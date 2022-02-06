<template>
    <div class="ingredient-container">
        <h4 class="ingredient-header">Ingredients</h4>
        <ul>
            <li v-for="ingredient in ingredients" :key="ingredient">
                {{ingredient}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
        };
    },
    props: {
        ingredients: Array,
    },
};
</script>
<style scoped>
    .ingredient-container {
        flex-basis:35%;
        background-color: #FFF;
        border-radius: 5px;
        padding:5px;
    }
    .ingredient-header {
        padding-bottom:20px;
    }
    ul {
        padding:0px;
    }
    li {
        list-style: none;
    }
    li { background: #f7fafc; }
    li:nth-child(odd) { background: #FFF; }
</style>
