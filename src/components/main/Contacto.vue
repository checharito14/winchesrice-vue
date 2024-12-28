<template>
	<section class="contacto">
		<h2>Contacto</h2>
		<div class="contacto__mapa">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.869412907285!2d-106.4078297!3d23.2114292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869f53a51b57fda9%3A0x9ab936aae01c7a9a!2sTaller%20Guillermo%20Rice!5e0!3m2!1ses-419!2smx!4v1734995970561!5m2!1ses-419!2smx"
				width="600"
				height="450"
				style="border: 0"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
		<div class="contacto__info">
			<p>Calzada Gabriel Leyva # 2116, Mazatlán, Sinaloa, México.</p>
			<p>Tel: (669) 982-17-64 , 981-33-65</p>
			<p>Email:</p>
		</div>
	</section>
</template>

<script>
</script>

<style lang="scss">
.contacto {
	min-height: 80vh;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: center;
	align-items: center;
	margin-bottom: 4rem;

	&__mapa {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&__info {
        padding: .5rem;
        text-align: center;
		p {
			line-height: 1.5;
		}
	}
}
</style>
