<template>
	<div class="card" :class="{ 'card--reverse': reverse }">
		<div class="card__imagen">
			<img src="@/assets/images/bomba.png" :alt="titulo" />
		</div>
		<div class="card__content">
			<h2>{{ titulo }}</h2>
			<p>{{ descripcion }}</p>
			<base-button link to="/productos">
				Mas información <ArrowRightIcon class="icon" />
			</base-button>
		</div>
	</div>
</template>

<script setup>
import { ArrowRightIcon } from "lucide-vue-next";
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
</script>

<style lang="scss" scoped>
.card {
	display: flex;
	gap: 2rem;
	margin: 2rem;
	padding: 1rem;

	&__imagen {
		display: flex;
		justify-content: center;
		align-items: center;
		flex:1;
	
		img {
			width: 80%;
			height: 100%;
		}
	}
}

.card--reverse {
	flex-direction: row-reverse;
}


.card__content {
	flex: 1;
	h2 {
		color: $azul-claro;
		font-size: 2.5rem;
	}
	p {
		color: $gris-oscuro;
		margin: 1rem 0;
	}
}

.icon {
	width: 20px;
	height: 20px;
}
</style>
