<template>
	<header>
	  <nav>
		<div class="nav-top">
		  <router-link class="logo" to="/">
			<img src="../../assets/logo.rice.png" alt="Logo winches rice" />
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
	position: relative;
  
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
		padding: 0;
  
		.nav-top {
		  flex: 0 0 auto;
		}
	  }
  
	  img {
		height: 40px;
		width: auto;
		transition: all 0.3s ease;
	  }
	}
  
	@include tablet {
	  height: 4rem;
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
	  width: 70%;
	  height: 100vh;
	  background: white;
	  padding-top: 5rem;
	  transition: right 0.3s ease;
	  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
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