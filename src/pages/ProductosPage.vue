<template>
	<div class="productos">
		<ProductosNav />
		<main class="productos__container">
			<ProductosHeader />
			<ProductosFeatures />
			<ProductosGaleria />
			<ProductosEspec />
		</main>
	</div>
</template>

<script setup>
import ProductosNav from "../components/productos/ProductosNav.vue";
import ProductosHeader from "../components/productos/ProductoHeader.vue";
import ProductosEspec from "../components/productos/ProductosEspec.vue";
import ProductosFeatures from "../components/productos/ProductosFeatures.vue";
import ProductosGaleria from "../components/productos/ProductosGaleria.vue";
</script>

<style lang="scss" scoped>
.product-page {
	background-color: #f8f9fa;
	min-height: 100vh;
}

.productos__container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem 1rem;
}

.gallery-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 1.5rem;
	margin-bottom: 3rem;
}

.gallery-item {
	cursor: pointer;
	border-radius: 8px;
	overflow: hidden;
	transition: transform 0.3s ease;

	&:hover {
		transform: scale(1.02);
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

</style>
