<template>
	<section class="productos__especificaciones">
		<h2>Especificaciones Técnicas</h2>
		<img :src="store.getCategoriaInfo.especificaciones" alt="Especificaciones" loading="lazy" />
	</section>
</template>

<script setup>
import { useStore } from "@/store/index.js";

const store = useStore();
</script>

<style lang="scss" scoped>
.productos__especificaciones {
	background: white;
	padding: 2rem;
	border-radius: 8px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	text-align: center;
	h2 {
		margin-bottom: 1.5rem;
		color: #1a202c;
	}
}
</style>
