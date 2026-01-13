<template>
	<section class="contacto">
		<h2>Contacto</h2>
		<div class="contacto__mapa">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.869412907285!2d-106.4078297!3d23.2114292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869f53a51b57fda9%3A0x9ab936aae01c7a9a!2sTaller%20Guillermo%20Rice!5e0!3m2!1ses-419!2smx!4v1734995970561!5m2!1ses-419!2smx"
				style="border: 0"
				title="Ubicacion"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
		<div class="contacto__info">
			<p>Calzada Gabriel Leyva #2116, Mazatlán, Sinaloa, México.</p>
			<p>Tel: (669) 982-17-64 , 981-33-65</p>
			<p>Email: maxi@red2000.com.mx</p>
		</div>
	</section>
</template>

<script></script>

<style lang="scss" scoped>
.contacto {
	min-height: 80vh;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: center;
	align-items: center;
	margin-bottom: 3rem;
	padding: 0 1rem;

	&__mapa {
		width: 100%;
		max-width: 600px;
		position: relative;
		aspect-ratio: 16/9;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

		iframe {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border: 0;
		}
	}

	&__info {
		padding: 1.5rem;
		text-align: center;
		background: rgba($amarillo, 0.1);
		border-radius: 8px;
		margin-top: 1.5rem;
		
		p {
			line-height: 1.7;
			margin-bottom: 0.75rem;
			color: $gris-oscuro;
			font-size: 1rem;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}
}
</style>
