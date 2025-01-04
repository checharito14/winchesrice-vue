<template>
	<div class="home-page">
		<Hero />
        <Productos />
		<Contacto />
	</div>
</template>

<script setup>
import Hero from "../components/main/Hero.vue";
import Productos from "../components/main/Productos.vue";
import Contacto from "../components/main/Contacto.vue";
</script>

<style scoped lang="scss">
.home-page {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	
}
</style>
