<template>
	<section class="productos">
		<div class="productos__intro">
			<div class="intro-badge">Nuestros Servicios</div>
			<h2 class="intro-title">
				Le ofrecemos a usted diseños de máquinas pesqueras que pueden
				contribuir a potenciar la producción pesquera
			</h2>
			<p class="intro-subtitle">
				Somos especialistas en la fabricación de winches o malacates
				hidráulicos
			</p>
			<div class="intro-divider"></div>
		</div>
		<div class="productos__cards">
			<ProductoCard
				titulo="Malacates"
				descripcion="Malacates hidráulicos para la pesca, minería, construcción y agricultura"
				imagen="/images/malacate.webp"
			/>
			<ProductoCard
				titulo="Bombas"
				descripcion="Se utilizan con excelentes resultados en el sistema de enfriamiento de la máquina.
                            Para circular agua en los condensadores de refrigeración
                            Para agitar la salmuera en las tinas de precongelación."
				imagen="/images/bomba.webp"
				reverse
			/>
			<ProductoCard
				titulo="Poleas"
				descripcion="Construidas totalmente en acero fundido, con baleros de rodillos cónicos. 
								Cáncamo de acero fundido. 
								Tornillería de acero de alta resistencia, sumamente fuerte y robusta
								.Económica y eficiente"
				imagen="/images/polea.webp"
			/>
		</div>
	</section>
</template>

<script setup>
import ProductoCard from "../productos/ProductoCard.vue";
</script>

<style scoped lang="scss">
.productos {
	min-height: 80vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0;
	padding: 0;

	&__intro {
		width: 100%;
		max-width: 900px;
		padding: 4rem 2rem 3rem;
		text-align: center;
		margin: 0 auto;

		.intro-badge {
			display: inline-block;
			padding: 0.5rem 1.5rem;
			background: rgba($amarillo, 0.1);
			color: $azul;
			border-radius: 8px;
			font-size: 0.85rem;
			font-weight: 600;
			text-transform: uppercase;
			letter-spacing: 1px;
			margin-bottom: 1.5rem;
		}

		.intro-title {
			font-size: 1.5rem;
			font-weight: 600;
			line-height: 1.5;
			color: $gris-oscuro;
			margin-bottom: 1rem;

			@include tablet {
				font-size: 1.8rem;
			}
		}

		.intro-subtitle {
			font-size: 1.1rem;
			color: $azul;
			font-weight: 500;
			margin-bottom: 2rem;

			@include tablet {
				font-size: 1.25rem;
			}
		}

		.intro-divider {
			width: 80px;
			height: 4px;
			background: linear-gradient(90deg, transparent, $amarillo, transparent);
			margin: 0 auto;
		}
	}

	&__cards {
		display: flex;
		flex-direction: column;
		gap: 4rem;
		margin: 1rem;
		padding: 0 1rem;

		@include telefono {
			margin: 1.5rem;
		}
	}
}
</style>
