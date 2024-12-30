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
