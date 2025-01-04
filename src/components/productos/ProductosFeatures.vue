<template>
	<section class="product-features">
		<div class="features-grid">
			<FeatureCard/>
		</div>
	</section>
</template>

<script setup>
import { useStore } from '@/store/index.js';
import FeatureCard from './FeatureCard.vue';

const store = useStore();
</script>

<style lang="scss" scoped>
.features-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 2rem;
	margin-bottom: 3rem;
}

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
