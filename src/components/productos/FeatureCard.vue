<template>
	<div class="feature-card" v-for="caracteristica in store.getCategoriaInfo.caracteristicas" :key="caracteristica.id">
		<div class="feature-icon">
			<i :class="['fas', caracteristica.icono]"></i>
		</div>
		<h3>{{ caracteristica.titulo }}</h3>
		<p>{{ caracteristica.descripcion }}</p>
	</div>
</template>
<script setup>
import { useStore } from "@/store/index.js";

const store = useStore();

</script>
<style lang="scss" scoped>
.feature-card {
	background: $blanco;
	padding: 2rem;
	border-radius: 8px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	text-align: center;
	transition: transform 0.3s ease;

	&:hover {
		transform: translateY(-5px);
	}

	.feature-icon {
		font-size: 2rem;
		color: $azul-claro;
		margin-bottom: 1rem;
	}

	h3 {
		margin-bottom: 0.5rem;
	}

	p {
		color: $gris-oscuro;
	}
}
</style>
