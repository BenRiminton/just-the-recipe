<template>
    <div class="method-container">
        <h4 class="method-header">Method</h4>
        <ol>
            <li v-for="step in steps" :key="step">{{step}}</li>
        </ol>
        </div>
</template>
<script>

export default {
    props: {
        steps: Array,
    },
};
</script>

<style scoped>
    .method-container {
        flex-basis:65%;
        background-color: #FFF;
        border-radius: 5px;
        padding:5px;
    }
    ol {
        padding:0px;
    }
    .method-header {
        padding-bottom:20px;
    }
</style>
