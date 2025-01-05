<template>
	<footer>
		<div class="footer">
			<section class="footer-izquierda">
				<h3>Winches Rice</h3>
				<ul>
					<li><router-link to="/home">Inicio</router-link></li>
					<span>|</span>
					<li><router-link to="/historia">Historia</router-link></li>
					<span>|</span>
					<li>
						<router-link to="/productos">Productos</router-link>
					</li>
					<span>|</span>
					<li><router-link to="/contacto">Contacto</router-link></li>
					<span>|</span>
				</ul>
			</section>

			<section class="footer-derecha">
				<div class="columna">
					<div>
						<i class="fa-solid fa-location-dot"></i>
						<p>Mazatlán Sinaloa México</p>
					</div>
					<div>
						<i class="fa-solid fa-phone"></i>
						<p>(669) 982-17-64 , 981-33-65</p>
					</div>
				</div>

				<div class="columna">
					<a href="https://wa.me/526692273353">
						<i class="fa-brands fa-whatsapp"></i>
						<p>+52 (669)227-33-53</p>
					</a>

					<a href="mailto:maxi@red2000.com.mx">
						<i class="fa-solid fa-envelope"></i>
						<p>maxi@red2000.com.mx</p>
					</a>
				</div>
			</section>
		</div>
		<div class="copy">
			<p>&copy; 2024 Cesar Rice. Todos los derechos reservados</p>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
.footer {
	display: flex;
	flex-direction: column-reverse;
	width: 100%;
	background-color: $azul;
	color: #fff;
	text-align: center;
	bottom: 0;
	padding: 1.5rem;

	@include tablet {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
}
/* footer izquierda */
.footer-izquierda {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h3 {
		margin-bottom: 1rem;
	}

	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 1.3rem;

		span {
			display: none;
		}

		@include tablet {
			flex-direction: row;
			gap: 0;
			span {
				display: block;
			}
		}

		li {
			margin: 0 0.625rem;
		}

		a {
			color: $blanco;
		}

		a:hover,
		a:active,
		a.router-link-active {
			color: $amarillo;
		}
	}
}

/* footer derecha */
.footer-derecha {
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-top: 2rem;

	.columna {
		display: flex;
		flex-direction: column;
	}

	@include desktop {
		.columna {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}

	div, a {
		color: $blanco;
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
	}

	p {
		font-size: 0.8rem;
	}
	i {
		color: $blanco;
		margin-right: 1rem;
	}
}
.copy {
	background-color: $azul;
	padding-bottom: 1.5rem;
	p {
		text-align: center;
		font-size: smaller;
		color: $gris;
	}
}
</style>
