<template>
	<footer>
		<section class="footer-izquierda">
			<h3>Winches Rice</h3>
			<ul>
				<li><router-link to="/home">Inicio</router-link></li>
				<span>|</span>
				<li><router-link to="/historia">Historia</router-link></li>
				<span>|</span>
				<li><router-link to="/productos">Productos</router-link></li>
				<span>|</span>
				<li><router-link to="/contacto">Contacto</router-link></li>
				<span>|</span>
			</ul>

			<p>&copy; 2024 Cesar Rice. Todos los derechos reservados</p>
		</section>

		<section class="footer-derecha">
			<div class="columna">
				<div>
					<i class="fa-solid fa-location-dot"></i>
					<p>Calzada Gabriel Leyva #2116, Mazatlán Sinaloa México</p>
				</div>
				<div>
					<i class="fa-solid fa-phone"></i>
					<p>(669) 982-17-64 , 981-33-65</p>
				</div>
			</div>
			<div class="columna">
				<div>
					<i class="fa-brands fa-whatsapp"></i>
					<p>+52 (669)227-33-53</p>
				</div>
				<div>
					<i class="fa-solid fa-envelope"></i>
					<p>maxi@red2000.com.mx</p>
				</div>
			</div>
		</section>
	</footer>
</template>

<style lang="scss" scoped>
footer {
	display: grid;
	max-width: 100%;
	background-color: $azul;
	color: #fff;
	text-align: center;
	bottom: 0;
	padding: 1.5rem;

	@include tablet {
		grid-template-columns: 1fr 1fr;
	}

	@include tablet {
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

		li {
			margin: 0 10px;
		}

		a {
			text-decoration: none;
			color: $blanco;
		}

		a:hover,
		a:active,
		a.router-link-active {
			color: $amarillo;
		}
	}

	p {
		font-size: smaller;
		margin-top: 1rem;
		color: $gris;
	}
}

/* footer derecha */
.footer-derecha {
	display: flex;
	flex-direction: column;
	justify-content: center;

	.columna {
		display: grid;
		grid-template-columns: 1fr 1fr;

		div {
			display: flex;
			align-items: center;
			margin-bottom: 1rem;
			text-align: start;
		}

		i {
			background-color: $gris-oscuro;
			padding: 8px;
			color: $blanco;
			border-radius: 50%;
			margin-right: 1rem;
		}
	}
}
</style>
