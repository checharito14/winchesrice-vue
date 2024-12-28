<template>
	<section class="historia">
		<div class="historia__text">
			<h2>Historia</h2>
			<p>
				Nuestra calidad industrial es el producto de una experiencia de
				más de 90 años. Desde hace tres generaciones, la familia Rice se
				dedica a la fabricación de productos para la industria y a la
				fundición de metales, y su prestigio ha ido más allá de las
				fronteras mexicanas. En la foto, Don Maximino Rice con sus dos
				hijos, padres de los actuales directores de los Talleres Rice, y
				herederos de una noble tradición que suma al empeño artesanal
				los elementos de la tecnología más avanzada.
			</p>
		</div>
		<div class="historia__imagen">
			<img src="@/assets/historia-image.png" alt="Historia" />
		</div>
	</section>
</template>

<style lang="scss" scoped>
.historia {
	display: grid;
	padding: 2rem;
	grid-template-columns: 2fr 1fr;
	height: 100vh;
	justify-content: center;
	align-items: center;

	&__text {
		h2 {
			font-size: 3.5rem;
			margin-bottom: 1rem;
			text-align: center;
		}

		p {
			text-align: center;
			line-height: 1.5;
			padding: 2rem;
		}
	}

	&__imagen {
		img {
			width: 100%;
			height: 100%;
		}
	}
}
</style>
