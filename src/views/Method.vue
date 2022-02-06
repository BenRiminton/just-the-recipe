<template>
    <div class="method-container">
        <h4 class="method-header">Method</h4>
        <ol>
            <li class="step" v-for="step in steps" :key="step">{{step}}</li>
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
        background-color: #FFF;
        border-radius: 5px;
        padding:5px;
    }
    ol {
        padding:0px 20px;
    }
    .method-header {
        padding-bottom:20px;
    }

    li.step {
        padding-bottom:5px;
    }
    li { background: #f7fafc; }
    li:nth-child(odd) { background: #FFF; }
</style>
