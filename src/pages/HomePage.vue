<template>
	<div class="home-page">
		<Hero />
		<div class="separator"></div>
        <Productos />
		<div class="separator"></div>
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
	gap: 0;
}

.separator {
	width: 100%;
	height: 1px;
	background-color: rgba(0, 0, 0, 0.08);
	margin: 0;
}
</style>
