<template>
	<section class="productos">
		<div class="productos__text">
			<h3>
				Le ofrecemos a usted diseños de máquinas pesqueras que pueden
				contribuir a potenciar la producción pesquera,<br />
				Somos especialistas en la fabricación de winches o malacates
				hidráulicos
			</h3>
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
	margin: 1.5rem;

	@include tablet {
		
	}

	&__text {
		font-weight: 400;
		width: 570px;
		margin: 5rem 0;
		color: $gris-oscuro;
		line-height: 1.5;
	}

	&__cards {
		display: flex;
		flex-direction: column;
		gap: 4rem;
	}
}
</style>
