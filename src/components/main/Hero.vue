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

	<section class="historia"></section>
</template>

<style lang="scss" scoped>
.hero {
	height: 100vh;
	background-image: url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/malacates4-B8UpHDaPhE6ecoI2UnidVgkDY7i2Pu.gif");
	background-size: cover;
	background-position: center;
	position: relative;


	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
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
