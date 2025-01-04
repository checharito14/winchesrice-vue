<template>
	<section class="contacto">
		<div class="contacto__content">
			<div class="contacto__text">
				<h3>
					Contactate<br />
					con nosotros
				</h3>

				<p>
					<i class="fa-solid fa-location-dot" style="color: red"></i
					>Calzada Gabriel Leyva # 2116, Mazatlán Sinaloa México
				</p>
				<p>
					<i class="fa-solid fa-phone" style="color: blue"></i>(669)
					982-17-64 , 981-33-65
				</p>
				<p>
					<i class="fa-brands fa-whatsapp" style="color: green"></i
					>+52 (669)227-33-53
				</p>
				<p>
					<i class="fa-solid fa-envelope" style="color: white"></i
					>maxi@red2000.com.mx
				</p>
			</div>
		</div>
		<div class="contacto__form">
			<base-card>
				<ContactoForm />
			</base-card>
		</div>
	</section>
</template>

<script setup>
import ContactoForm from "../components/contacto/ContactoForm.vue";
</script>

<style lang="scss" scoped>
.contacto {
	margin: 0 3rem;
	min-height: 110vh;
	display: grid;
	align-items: center;

	@include desktop {
		grid-template-columns: 1fr 1fr;
	}
	&__content {
		width: 100%;
		max-width: 1400px;
		padding: 0 2rem;
	}

	&__text {
		background-color: rgba($amarillo, 0.9);
		padding: 1.5rem;
		max-width: 500px;
		clip-path: polygon(0 0, 100% 0, 95% 100%, 0 100%);

		h3 {
			color: $azul;
			line-height: 1.1;
			margin-bottom: 1rem;
		}

		p {
			color: $azul;
			margin-bottom: 1rem;

			i {
				margin-right: 1rem;
			}
		}
	}

	&__form {
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
