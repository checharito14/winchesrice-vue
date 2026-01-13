<template>
	<div
		ref="cardRef"
		:class="[
			'card',
			{ 'is-visible': isIntersecting },
			{ 'card--reverse': reverse },
		]"
	>
		<div class="card__imagen">
			<img :src="imagen" :alt="titulo" loading="lazy" />
		</div>
		<div class="card__content">
			<h3>{{ titulo }}</h3>
			<p>{{ descripcion }}</p>
			<base-button link to="/productos">
				Mas información <i class="fa-solid fa-arrow-right icono"></i>
			</base-button>
		</div>
	</div>
</template>

<script setup>
import { useIntersectionObserver } from "../../composables/useIntersection";
const props = defineProps({
	titulo: {
		type: String,
		required: true,
	},
	descripcion: {
		type: String,
		required: true,
	},
	imagen: {
		type: String,
		required: false,
	},
	reverse: {
		type: Boolean,
		required: false,
		default: false,
	},
});

const { target: cardRef, isIntersecting } = useIntersectionObserver({
	threshold: 0.2, // El elemento se considerará visible cuando el 20% esté en la pantalla
});
</script>

<style lang="scss" scoped>
.card {
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 1rem;
	opacity: 0;
	transform: translateY(30px);
	transition: opacity 0.5s, transform 0.5s;
	background-color: $blanco;
	border-radius: 8px;
	// box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
	border: 1px solid rgba(0, 0, 0, 0.1);


	@include tablet {
		flex-direction: row;
		margin: 2rem;
		padding: 2rem;
	}

	&__imagen {
		display: flex;
		justify-content: center;
		align-items: center;
		@include tablet {
			flex: 1;
		}

		@include telefono {
			width: 100%;
		}
	}

	&__content {
		text-align: center;
		@include tablet {
			flex: 1;
			text-align: left;
		}
		h3 {
			color: $azul-claro;
			font-size: 2.5rem;
		}
		p {
			color: $gris-oscuro;
			margin: 1rem 0;
		}
	}
}

.icono {
	display: none;

	@include tablet {
		display: inline;
	}
}

@include tablet {
	.card--reverse {
		flex-direction: row-reverse;
	}
}

.card.is-visible {
	opacity: 1;
	transform: translateY(0);
}
</style>
