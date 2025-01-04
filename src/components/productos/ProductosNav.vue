<template>
	<div class="productos__nav">
		<div class="productos__container">
			<router-link
				v-for="categoria in store.categoriaInfo"
				to="/productos"
				:key="categoria.titulo"
				@click="store.cambiarCategoria(categoria.id)"
				:class="['productos__nav-link',{ active: store.categoriaActual === categoria.id }]"
			>
				{{ categoria.titulo}}
			</router-link>
		</div>
	</div>
</template>

<script setup>
import { useStore } from "@/store/index.js";

const store = useStore();
</script>

<style lang="scss" scoped>
.productos__nav {
	background: $azul-claro;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	// position: sticky;
	// top: 0;
	// z-index: 1000; navbar top

	.productos__container {
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 0.5rem 1rem;
		gap: 1rem;
	}

	&-link {
		color: $blanco;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		transition: all 0.3s ease;

		&:hover,
		&.active {
			color: #2a5298;
			background: #e2e8f0;
		}
	}
}
</style>
