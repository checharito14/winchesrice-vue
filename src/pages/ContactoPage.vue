<template>
	<section class="contacto">
		<div class="contacto__content">
			<div class="contacto__text">
				<h1>
					Contactate<br />
					con nosotros
				</h1>

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
	position: relative;
	// background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
	// 	url(https://images.pexels.com/photos/623252/pexels-photo-623252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
	height: 130vh;
	background-size: cover;
	background-position: center;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;

	&__content {
		position: relative;
		width: 100%;
		max-width: 1400px;
		padding: 0 2rem;
	}

	&__text {
		background-color: rgba($amarillo, 0.9);
		padding: 2rem;
		max-width: 600px;
		clip-path: polygon(0 0, 100% 0, 95% 100%, 0 100%);

		h1 {
			font-size: 2.5rem;
			color: $azul;
			line-height: 1.1;
			margin-bottom: 1rem;
		}

		p {
			font-size: 1.2rem;
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
		max-width: 80%;
	}
}
</style>
