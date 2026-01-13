<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.card {
    border-radius: 8px;
    margin: 2rem auto;
    padding: 1.5rem;
    background-color: $blanco;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border: 1px solid rgba(0, 0, 0, 0.06);

    @include tablet {
        padding: 2rem;
    }
}
</style>