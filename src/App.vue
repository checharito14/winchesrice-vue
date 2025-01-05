<script setup>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
</script>

<template>
	<div class="app-container">
		<TheHeader />
		<div class="main-content">
			<router-view v-slot="{ Component }">
				<transition name="page">
					<component :is="Component" class="page-enter"/>
				</transition>
			</router-view>
		</div>
		<TheFooter />
		<a href="https://wa.me/526692231329" class="whatsapp-button" target="_blank" aria-label="Chat on WhatsApp">
            <i class="fab fa-whatsapp"></i>
        </a>
	</div>
</template>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: $fuente_principal;
}

.app-container {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.main-content {
	flex: 1;
}

img {
	max-width: 100%;
}

a {
	text-decoration: none;
}

.whatsapp-button {
    position: fixed;
    bottom: 15px;
    right: 15px;
    background-color: #25d366;
    color: white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    text-decoration: none;

	@include  desktop {
		width: 60px;
        height: 60px;
        font-size: 30px;
        bottom: 20px;
        right: 20px;
	}
}

.whatsapp-button:hover {
    background-color: #1ebe57;
}

// Animaciones
.page-enter-active {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
