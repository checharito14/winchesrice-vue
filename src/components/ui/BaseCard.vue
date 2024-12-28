<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
.card {
    border-radius: 12px;
    margin: 2rem auto;
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>