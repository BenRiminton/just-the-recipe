<template>
    <div class="recipe-card">
        <a :href="recipe.url">
            <div class="card" style="width: 18rem;">
                <img :src="recipe.imageURL" class="card-img-top">
                <div class="card-body">
                    <p class="card-text">{{recipe.name}}</p>
                </div>
            </div>
        </a>
    </div>
</template>
<script>
export default {
    props: {
        recipe: {
            type: Object,
            required: true,
        },
    },
};
</script>
<style scoped>
    .card {
        background:#212529;
    }
    .card:hover {
        background:#3b3f41;
    }

    .card-text {
        font-weight:bold;
    }

    a, a:hover {
        text-decoration: none;
        color:#ffffff;
    }
</style>
