<template>
	<section class="hero">
		<div class="hero__content">
			<h1 class="hero__title">
				EQUIPOS INDUSTRIALES<br />
				DE MAZATLÁN S.A DE C.V
			</h1>
			<p class="hero__subtitle">
				Sinónimo de honestidad y calidad desde 1909
			</p>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.hero {
	min-height: 50vh;
	background-image: url("/images/malacate_principal_small.webp");
	background-size: cover;
	background-position: center;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	@include tablet {
		background-image: url("/images/malacate_principal_medium.webp");
		min-height: 90vh;
	}

	@include desktop {
		background-image: url("/images/malacate_principal_large.webp");
	}

	&::before {
		content: "";
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
	}

	&__content {
		position: relative;
		z-index: 1;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: #fff;
		padding: 0 1rem;
	}

	&__title {
		margin-bottom: 1rem;
		line-height: 1.2;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

		@media (max-width: 768px) {
			font-size: 2rem;
		}
	}

	&__subtitle {
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
	}
}
</style>
