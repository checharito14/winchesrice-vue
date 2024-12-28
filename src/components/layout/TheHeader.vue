<template>
	<header>
		<nav>
			<router-link class="logo" to="/"
				><img src="../../assets/logo.rice.png" alt="Logo winches rice"
			/></router-link>
			<ul>
				<li><router-link to="/">Inicio</router-link></li>
				<li><router-link to="/historia">Historia</router-link></li>
				<li><router-link to="/productos">Productos</router-link></li>
				<li><router-link to="/contacto">Contacto</router-link></li>
			</ul>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
header {
	width: 100%;
	display: flex;
	height: 4rem;
	align-items: center;
	justify-content: center;
}

header nav {
	width: 70%;
	margin: auto;
	display: flex;
	justify-content: space-between;
}

nav img {
    height: 40px;
    width: auto;
    transition: all 0.3s ease;
}

a {
	text-decoration: none;
	display: inline-block;
	color: $azul;
    transition: all 0.3s ease;    
}

a:hover:not(.logo) {
    transform: scale(1.1);
}

a:hover,
a:active,
a.router-link-active {
	color: #ffbc0e;
}

ul {
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: center;
}

li {
	margin: 0 1rem;
}
</style>
