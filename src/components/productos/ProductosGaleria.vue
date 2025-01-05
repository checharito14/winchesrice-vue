<template>
	<section class="productos-galeria">
		<h2>Galeria de Productos</h2>

		<swiper
			:effect="'coverflow'"
			:grabCursor="true"
			:centeredSlides="true"
			:slidesPerView="'auto'"
			:coverflowEffect="{
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: true,
			}"
			:pagination="true"
			:lazy="true"
			:modules="modules"
			class="mySwiper"
		>
			<swiper-slide
				v-for="(imagen, index) in store.getCategoriaInfo.imagenes"
				:key="index"
			>
				<img :src="imagen" loading="lazy" />
			</swiper-slide>
		</swiper>
	</section>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useStore } from "@/store/index.js";

const modules = [EffectCoverflow, Pagination];
const store = useStore();

const imagenes = store.getCategoriaInfo.imagenes;
</script>

<style>
.swiper {
	width: 100%;
	padding-top: 50px;
	padding-bottom: 50px;
}

.swiper-slide {
	background-position: center;
	background-size: cover;
	width: 300px;
	height: 300px;
}

.swiper-slide img {
	display: block;
	height: 100%;
	width: 100%;
}
</style>
