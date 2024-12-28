<template>
	<div class="card">
		<div class="card__banner">
			<img src="../../assets/images/malacate_cate.png" :alt="titulo" />
			<h3>{{ titulo }}</h3>
		</div>
		<div class="card__content">
			<p>{{ descripcion }}</p>
			<base-button to="/productos"> Mas información </base-button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
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
	},
};
</script>

<style lang="scss" scoped>
.card {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 12px;
	margin: 2rem 0;
	// background-color: $blanco;
	padding: 1rem;
	// box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

	&__banner {
		position: relative;

		img {
			object-fit: cover;
			width: 100%;
			height: 100%;
			border-radius: 0.625rem;
		}

		h3 {
			position: absolute;
			bottom: 4rem;
			color: $blanco;
			font-size: 2.25rem;
			left: 50%;
			transform: translate(-50%, 0);
		}
	}
}

.card__content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;

	p {
		margin: 1rem 0;
	}
}
</style>
