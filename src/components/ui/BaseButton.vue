<template>
    <button v-if="!link" class="btn-submit">
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
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
    transition: all .3s ease;
    background-color: $azul;
    color: $blanco;
    border-radius: 4px;
    margin-top: 1rem;
}

button{
    display: inline;
}

a:hover{
    background-color: $azul-claro;
    transform: translateX(5px);
}

button:hover {
   opacity: 0.8;
}
</style>