<template>
    <div style="display:flex;flex-direction: column;">
        <label v-if="label">
            {{label}}
        </label>
        <p v-if="helpText" class="help-text">{{helpText}}</p>
        <input v-if="!variant || variant==='text'" :name="name" :placeholder="placeholder"
            v-bind:value="value" v-on:input="updateValue($event)" :disabled="disabled" />
        <textarea v-if="variant==='textarea'" :name="name" :placeholder="placeholder"
            v-bind:value="value" v-on:input="updateValue($event)" :disabled="disabled" />
    </div>
</template>
<script>
export default {
    props: {
        name: String,
        label: String,
        value: String,
        helpText: String,
        placeholder: String,
        variant: String,
        disabled: Boolean,
    },
    methods: {
        updateValue(event) {
            const { name, value } = event.target;
            this.$emit('inputchange', { name, value });
        },
    },
};
</script>
<style scoped>
    .help-text {
        color:#888;
        font-size:0.8rem;
        padding:0px;
        margin:0px;
    }

    textarea {
        min-height:150px;
    }
</style>
