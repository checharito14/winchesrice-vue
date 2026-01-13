<template>
	<header>
	  <nav>
		<div class="nav-top">
		  <router-link class="logo" to="/">
			<img src="../../assets/logo.rice.webp" alt="Logo winches rice" />
		  </router-link>
		  
		  <button 
			class="menu-toggle" 
			@click="toggleMenu"
			:aria-expanded="openMenu"
			aria-label="Toggle menu"
		  >
			<i :class="openMenu ? 'fas fa-times' : 'fas fa-bars'"></i>
		  </button>
		</div>
  
		<ul :class="{ 'menu-open': openMenu }">
		  <li><router-link @click="closeMenu" to="/home">Inicio</router-link></li>
		  <li><router-link @click="closeMenu" to="/historia">Historia</router-link></li>
		  <li><router-link @click="closeMenu" to="/productos">Productos</router-link></li>
		  <li><router-link @click="closeMenu" to="/contacto">Contacto</router-link></li>
		</ul>
	  </nav>
  
	  <!-- Overlay para móvil -->
	  <div 
		v-if="openMenu" 
		class="overlay"
		@click="closeMenu"
	  ></div>
	</header>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  
  const openMenu = ref(false)
  
  const toggleMenu = () => {
	openMenu.value = !openMenu.value
  }
  
  const closeMenu = () => {
	openMenu.value = false
  }
  
  // Prevenir scroll cuando el menú está abierto
  watch(openMenu, (isOpen) => {
	document.body.style.overflow = isOpen ? 'hidden' : ''
  })
  </script>
  
  <style lang="scss" scoped>
  header {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: sticky;
	top: 0;
	z-index: 1000;
	background-color: rgba(255, 255, 255, 0.98);
	backdrop-filter: blur(10px);
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
	transition: all 0.3s ease;
  
	nav {
	  width: 70%;
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  padding: 1rem;
  
	  .nav-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
	  }
  
	  @include tablet {
		flex-direction: row;
		justify-content: space-between;
		padding: 0.75rem 0;
  
		.nav-top {
		  flex: 0 0 auto;
		}
	  }
  
	  img {
		height: 45px;
		width: auto;
		transition: all 0.3s ease;
		filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));

		&:hover {
			transform: scale(1.05);
		}
	  }
	}
  
	@include tablet {
	  height: 5rem;
	}
  }
  
  .menu-toggle {
	display: block;
	background: none;
	border: none;
	color: $azul;
	cursor: pointer;
	padding: 0.5rem;
	transition: color 0.3s ease;
	z-index: 50;
  
	&:hover {
	  color: $amarillo;
	}
  
	@include tablet {
	  display: none;
	}
  }
  
  a {
	text-decoration: none;
	display: inline-block;
	color: $azul;
	transition: color 0.3s ease;
	position: relative;
  }
  
  a:not(.logo) {
	padding: 0.5rem 1rem;
	border-radius: 4px;
	transition: all 0.3s ease;
	font-weight: 500;

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 0;
		height: 3px;
		background: linear-gradient(90deg, $amarillo, #ffd54f);
		transition: width 0.3s ease;
		border-radius: 2px;
	}

	&:hover {
		color: $amarillo;
		// background-color: rgba(255, 188, 14, 0.1);
		
		&::after {
			width: 80%;
		}
	}

	&.router-link-active {
		color: $amarillo;
		font-weight: 700;
		
		&::after {
			width: 80%;
		}
	}
  }
  
  ul {
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;
	margin: 0;
	padding: 1rem 0;
  
	// Estilos para móvil
	@media (max-width: 767px) {
	  position: fixed;
	  top: 0;
	  right: -100%;
	  width: 75%;
	  max-width: 300px;
	  height: 100vh;
	  background: white;
	  padding-top: 6rem;
	  transition: right 0.3s ease;
	  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
	  z-index: 40;
  
	  &.menu-open {
		right: 0;
	  }
	}
  
	@include tablet {
	  flex-direction: row;
	  gap: 0;
	  padding: 0;
	  position: static;
	  width: auto;
	  height: auto;
	  background: none;
	  box-shadow: none;
	}
  }
  
  li {
	margin: 0 1rem;
  }
  
  .overlay {
	display: none;
	
	@media (max-width: 767px) {
	  display: block;
	  position: fixed;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  background: rgba(0, 0, 0, 0.5);
	  z-index: 30;
	  animation: fadeIn 0.3s;
	}
  }

  i{
	font-size: 2rem;
  }
  
  @keyframes fadeIn {
	from {
	  opacity: 0;
	}
	to {
	  opacity: 1;
	}
  }
  </style>