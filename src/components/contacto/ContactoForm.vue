<template>
	<div class="form-container">
		<base-dialog
            :show="!!confirm"
            title="Mensaje enviado correctamente"
            @close="handleConfirm"
            >{{ confirm }}</base-dialog
        >
		<base-dialog
            :show="!!error"
            title="Ocurrio un error"
            @close="handleError"
            >{{ error }}</base-dialog
        >
		<form @submit.prevent="submitForm">
			<div class="form-header">
				<i class="fa-regular fa-message"></i>
				<h3>Contáctanos</h3>
			</div>
			<div class="form-row">
				<!-- Nombre -->
				<div class="form-group">
					<label for="nombre">Nombre</label>
					<input
						type="text"
						id="nombre"
						name="nombre"
						:class="{ error: v$.nombre.$error }"
						v-model="formData.nombre"
					/>
					<span v-if="v$.nombre.$error" class="error-msg"
						>Ingresa tu nombre</span
					>
				</div>
				<!-- Email -->
				<div class="form-group">
					<label for="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						:class="{ error: v$.email.$error }"
						v-model="formData.email"
					/>
					<span v-if="v$.email.$error" class="error-msg"
						>Ingresa un email valido</span
					>
				</div>
			</div>
			<!-- Telefono -->
			<div class="form-group">
				<label for="telefono">Telefono</label>
				<input
					type="tel"
					id="telefono"
					name="telefono"
					v-mask="'(###) ###-####'"
					:class="{ error: v$.telefono.$error }"
					v-model="formData.telefono"
				/>
				<span v-if="v$.telefono.$error" class="error-msg"
					>Ingresa un telefono valido</span
				>
			</div>
			<!-- País -->
			<div class="form-group">
				<label for="pais">País</label>
				<select
					v-model="formData.pais"
					:class="{ error: v$.pais.$error }"
					id="pais"
					@change="fetchStates"
				>
					<option
						v-for="country in countries"
						:key="country.alpha3Code"
						:value="country.name"
					>
						{{ country.name }}
					</option>
				</select>
				<span v-if="v$.pais.$error" class="error-msg"
					>Selecciona tu pais</span
				>
			</div>
			<!-- Estado -->
			<div class="form-group" v-if="formData.pais === 'Mexico'">
				<label for="estado">Estado</label>
				<select v-model="formData.estado" id="estado">
					<option
						v-for="state in states"
						:key="state.iso2"
						:value="state.name"
					>
						{{ state.name }}
					</option>
				</select>
				<span v-if="v$.nombre.$error" class="error-msg"
					>Selecciona tu estado</span
				>
			</div>

			<div class="form-group">
				<label for="mensaje">Mensaje</label>
				<textarea
					id="mensaje"
					name="mensaje"
					v-model="formData.mensaje"
					:class="{ error: v$.mensaje.$error }"
					placeholder="Escribe tu mensaje aquí..."
				></textarea>
				<span v-if="v$.mensaje.$error" class="error-msg"
					>Ingresa un mensaje</span
				>
			</div>

			<base-button type="submit">
				<i v-if="isLoading" class="fas fa-spinner fa-spin"></i>
				<p v-else>Enviar</p>
			</base-button>
		</form>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { email, helpers, minLength, required } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

const formData = ref({
	nombre: "",
	email: "",
	telefono: "",
	pais: "",
	estado: "",
	mensaje: "",
});

const countries = ref([]);
const states = ref([]);
const confirm = ref(null)
const error = ref(null)

const fetchCountries = async () => {
	try {
		const response = await axios.get("https://restcountries.com/v2/all");
		countries.value = response.data;
	} catch (error) {
		console.error("Error fetching countries:", error);
	}
};

const fetchStates = async () => {
	if (formData.value.pais === "Mexico") {
		try {
			const response = await axios.get(
				"https://api.countrystatecity.in/v1/countries/MX/states",
				{
					headers: {
						"X-CSCAPI-KEY":
							"RUFCampZSm5BVzROa2dzV2JOSlYzRlpwYjRHT3IwWFEwbTFhM29Icw==",
					},
				}
			);
			states.value = response.data;
		} catch (error) {
			console.error("Error fetching states:", error);
		}
	} else {
		states.value = [];
	}
};

//Reglas de validación
const rules = {
	nombre: { required },
	email: { required, email },
	telefono: {
		required,
		minLength: helpers.withMessage(
			"El telefono debe tener al menos 10 caracteres",
			minLength(10)
		),
	},
	pais: { required },
	mensaje: { required },
};

const v$ = useVuelidate(rules, formData);
const isLoading = ref(false);

const API_URL =
	process.env.NODE_ENV === "production"
		? "/api/send-email" // En producción, las rutas API comenzarán con /api
		: "http://localhost:3000/api/send-email";

const submitForm = async () => {
	isLoading.value = true;
	const result = await v$.value.$validate();
	if (result) {
		try {
			const response = await fetch(API_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData.value),
			});
			if (response.ok) {
				confirm.value = "Hemos recibido tu solicitud. Obtendras una respuesta en breve"
				formData.value = {
					nombre: "",
					email: "",
					telefono: "",
					pais: "",
					estado: "",
					mensaje: "",
				};
			} else {
				error.value("Ocurrio un error al enviar el mensaje")
			}
		} catch (err) {
			error.value =  "Ocurrió un error en la conexion intentalo mas tarde"
		} finally {
			isLoading.value = false;
		}
	}
	isLoading.value = false;
};

const handleConfirm = () => {
	confirm.value = null
}

const handleError = () => {
	confirm.value = null
}

onMounted(() => {
	fetchCountries();
});
</script>

<style lang="scss" scoped>
.form-header {
	display: flex;
	align-items: center;
	gap: 2rem;
	margin-bottom: 1rem;
}

.form-container {
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	@include desktop {
		.form-row {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 2rem;
		}
	}
	.form-group {
		display: flex;
		flex-direction: column;
	}

	h3 {
		font-weight: 600;
	}
	label {
		color: $azul;
		display: block;
		margin-bottom: 0.5rem;
	}

	input,
	textarea,
	select {
		display: block;
		width: 100%;
		border: 2px solid $gris;
		font: inherit;
		padding: 0.5rem;
		border-radius: 0.5rem;

		&:focus {
			outline: none;
			box-shadow: 0 0 0 3px rgba(100, 116, 139, 0.1);
			border-color: $azul-claro;
		}

		&.error {
			border-color: $rojo;
		}
	}

	textarea {
		resize: vertical;
		min-height: 100px;
	}
}

span {
	font-size: 12px;
	color: $rojo;
}
</style>
