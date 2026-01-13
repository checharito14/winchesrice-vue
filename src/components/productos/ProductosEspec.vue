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
	background: $blanco;
	padding: 2rem;
	border-radius: 8px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	border: 1px solid rgba(0, 0, 0, 0.06);
	text-align: center;
	h2 {
		font-size: 1.5rem;
		margin-bottom: 1.5rem;
		color: #1a202c;
		@include tablet {
			font-size: 3rem;
		}
	}
}
</style>
