<template>
    <div v-if="variant === 'primary'" class="alert alert-primary" role="alert">
       <span v-html="message"></span>
    </div>
    <div v-if="variant === 'secondary'" class="alert alert-secondary" role="alert">
       <span v-html="message"></span>
    </div>
    <div v-if="variant === 'success'" class="alert alert-success" role="alert">
       <span v-html="message"></span>
    </div>
    <div v-if="variant === 'danger'" class="alert alert-danger" role="alert">
       <span v-html="message"></span>
    </div>
    <div v-if="variant === 'warning'" class="alert alert-warning" role="alert">
       <span v-html="message"></span>
    </div>
    <div v-if="variant === 'info'" class="alert alert-info" role="alert">
       <span v-html="message"></span>
    </div>
    <div v-if="variant === 'light'" class="alert alert-light" role="alert">
       <span v-html="message"></span>
    </div>
    <div v-if="!variant || variant === 'dark'" class="alert alert-dark" role="alert">
       <span v-html="message"></span>
    </div>
</template>
<script>
export default {
    props: {
        message: String,
        variant: String,
        links: Array,
    },
};
</script>
<style scoped>
    .alert {
        margin-bottom:0px;
        padding: 0.5rem;
    }
</style>
