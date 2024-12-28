<template>
    <button v-if="!link">
        <slot></slot>
    </button>

    <router-link v-else :to="to">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        to: {
            type: String,
            required: false,
        },
        link: {
            type: Boolean,
            required: false,
            default: false,
        }
    }
}
</script>

<style lang="scss" scoped>
button,
a {
    padding: .5rem 1.5rem;
    border: none;
    display: inline-block;
    color: #ffffff;
    font: inherit;
    cursor: pointer;
    transition: all .5s ease;
    background-color: $gris-oscuro;
    color: $blanco;
    border-radius: 1.25rem;
    margin-top: 1rem;
}

a:hover,
button:hover {
    background-color: $gris;
    color: $negro;
}
</style>