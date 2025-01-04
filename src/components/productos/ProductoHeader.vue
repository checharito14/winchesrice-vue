<template>
	<section class="producto-header">
		<h2>{{ store.getCategoriaInfo.titulo }}</h2>
		<p class="producto-description">
			{{ store.getCategoriaInfo.descripcion }}
		</p>
	</section>
</template>

<script setup>
import { useStore } from '@/store/index.js';

const store = useStore();
</script>

<style lang="scss" scoped>
.producto-header {
	text-align: center;
	margin-bottom: 3rem;

	h2 {
		margin-bottom: 1rem;
	}

	.producto-description {
		color: $gris-oscuro;
	}
}
</style>
