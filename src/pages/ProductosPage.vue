<template>
	<div class="product-page">

	  <div class="sub-nav">
		<div class="container">
		  <router-link to="/productos/malacates" class="sub-nav-link active">Malacates</router-link>
		  <router-link to="/productos/poleas" class="sub-nav-link">Poleas</router-link>
		  <router-link to="/productos/bombas" class="sub-nav-link">Bombas</router-link>
		</div>
	  </div>
  
	  <main class="container">
		<section class="product-header">
		  <h1>Malacates RICE</h1>
		  <p class="product-description">
			Fuerte robusto, para muchos años de trabajo y fácil de manejar.
		  </p>
		</section>
  
		<section class="product-features">
		  <div class="features-grid">
			<div class="feature-card">
			  <div class="feature-icon">
				<i class="fas fa-cog"></i>
			  </div>
			  <h3>Engranajes maquinados</h3>
			  <p>Fabricados de acero especial</p>
			</div>
			<div class="feature-card">
			  <div class="feature-icon">
				<i class="fas fa-gear"></i>
			  </div>
			  <h3>Carretes estructurales</h3>
			  <p>Acero con lubricación permanente</p>
			</div>
			<div class="feature-card">
			  <div class="feature-icon">
				<i class="fas fa-rotate"></i>
			  </div>
			  <h3>Sistema de embrague</h3>
			  <p>Fricción de acción positiva</p>
			</div>
		  </div>
		</section>
  
		<section class="product-gallery">
		  <h2>Galería de Productos</h2>
		  <div class="gallery-grid">
			<div class="gallery-item" @click="openGallery(0)">
			  <img src="" alt="Malacate Industrial" />
			</div>
			<div class="gallery-item" @click="openGallery(1)">
			  <img src="" alt="Malacate Industrial" />
			</div>
		  </div>
		</section>
  
		<section class="product-specs">
		  <h2>Especificaciones Técnicas</h2>
		  <div class="table-responsive">
			<table class="specs-table">
			  <thead>
				<tr>
				  <th>Modelo</th>
				  <th>R150T</th>
				  <th>R200T</th>
				  <th>R300T</th>
				  <th>R400T</th>
				  <th>R500T</th>
				  <th>R600T</th>
				</tr>
			  </thead>
			  <tbody>
				<tr>
				  <td>Capacidad (lbs)</td>
				  <td>2200</td>
				  <td>6600</td>
				  <td>6600</td>
				  <td>8800</td>
				  <td>13200</td>
				  <td>13200</td>
				</tr>
				<tr>
				  <td>Diámetro del cable</td>
				  <td>@125</td>
				  <td>@133</td>
				  <td>@133</td>
				  <td>@149</td>
				  <td>@120</td>
				  <td>@120</td>
				</tr>
			  </tbody>
			</table>
		  </div>
		</section>
	  </main>
	</div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const openGallery = (index) => {
	// Implementación del visor de galería
	console.log('Opening gallery at index:', index)
  }
  </script>
  
  <style lang="scss" scoped>
  .product-page {
	background-color: #f8f9fa;
	min-height: 100vh;
  }
  
  .navbar {
	background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
	padding: 1rem 0;
	position: sticky;
	top: 0;
	z-index: 1000;
  
	.container {
	  max-width: 1200px;
	  margin: 0 auto;
	  padding: 0 1rem;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	}
  
	&-brand {
	  color: white;
	  font-size: 1.5rem;
	  font-weight: 700;
	}
  
	&-menu {
	  display: flex;
	  gap: 1.5rem;
  
	  .nav-link {
		color: rgba(255, 255, 255, 0.8);
		text-decoration: none;
		font-weight: 500;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		transition: all 0.3s ease;
  
		&:hover, &.active {
		  color: white;
		  background: rgba(255, 255, 255, 0.1);
		}
	  }
	}
  }
  
  .sub-nav {
	background: $azul-claro;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	
	.container {
	  max-width: 1200px;
	  margin: 0 auto;
	  padding: 0.5rem 1rem;
	  display: flex;
	  gap: 1rem;
	  overflow-x: auto;
	}
  
	&-link {
	  color: #4a5568;
	  text-decoration: none;
	  padding: 0.5rem 1rem;
	  border-radius: 4px;
	  white-space: nowrap;
	  transition: all 0.3s ease;
  
	  &:hover, &.active {
		color: #2a5298;
		background: #e2e8f0;
	  }
	}
  }
  
  .container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem 1rem;
  }
  
  .product-header {
	text-align: center;
	margin-bottom: 3rem;
  
	h1 {
	  font-size: 2.5rem;
	  color: #1a202c;
	  margin-bottom: 1rem;
	}
  
	.product-description {
	  font-size: 1.25rem;
	  color: #4a5568;
	}
  }
  
  .features-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 2rem;
	margin-bottom: 3rem;
  }
  
  .feature-card {
	background: white;
	padding: 2rem;
	border-radius: 8px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	text-align: center;
	transition: transform 0.3s ease;
  
	&:hover {
	  transform: translateY(-5px);
	}
  
	.feature-icon {
	  font-size: 2rem;
	  color: #2a5298;
	  margin-bottom: 1rem;
	}
  
	h3 {
	  color: #1a202c;
	  margin-bottom: 0.5rem;
	}
  
	p {
	  color: #4a5568;
	}
  }
  
  .gallery-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 1.5rem;
	margin-bottom: 3rem;
  }
  
  .gallery-item {
	cursor: pointer;
	border-radius: 8px;
	overflow: hidden;
	transition: transform 0.3s ease;
  
	&:hover {
	  transform: scale(1.02);
	}
  
	img {
	  width: 100%;
	  height: 100%;
	  object-fit: cover;
	}
  }
  
  .product-specs {
	background: white;
	padding: 2rem;
	border-radius: 8px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
	h2 {
	  margin-bottom: 1.5rem;
	  color: #1a202c;
	}
  }
  
  .table-responsive {
	overflow-x: auto;
  }
  
  .specs-table {
	width: 100%;
	border-collapse: collapse;
	
	th, td {
	  padding: 1rem;
	  text-align: left;
	  border-bottom: 1px solid #e2e8f0;
	}
  
	th {
	  background: #f7fafc;
	  font-weight: 600;
	  color: #1a202c;
	}
  
	tr:hover {
	  background: #f7fafc;
	}
  }
  
  @media (max-width: 768px) {
	.navbar-menu {
	  display: none;
	}
  
	.product-header {
	  h1 {
		font-size: 2rem;
	  }
	}
  
	.features-grid {
	  grid-template-columns: 1fr;
	}
  }
  </style>