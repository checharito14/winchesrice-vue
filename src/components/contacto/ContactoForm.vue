<template>
	<div class="form-container">
		<form @submit.prevent="submitForm">
			<div class="form-header">
				<h3>Contáctanos</h3>
				<i class="fa-regular fa-message"></i>
			</div>
			<div class="form-row">
				<!-- Nombre -->
				<div class="form-group">
					<label for="nombre">Nombre</label>
					<input
						type="text"
						id="nombre"
						name="nombre"
						v-model="formData.nombre"
						required
					/>
				</div>
				<!-- Email -->
				<div class="form-group">
					<label for="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						v-model="formData.email"
						required
					/>
				</div>
			</div>
			<!-- Telefono -->
			<div class="form-group">
				<label for="telefono">Telefono</label>
				<input
					type="tel"
					id="telefono"
					name="telefono"
					v-model="formData.telefono"
					v-mask="'(###) ###-####'"
					required
				/>
			</div>
			<!-- Pais -->
			<div class="form-group">
				<label for="pais">País</label>
				<input
					type="text"
					id="pais"
					name="pais"
					v-model="formData.pais"
					required
				/>
			</div>
			<!-- Ciudad -->
			<div class="form-group">
				<label for="ciudad">Ciudad</label>
				<input
					type="text"
					id="ciudad"
					name="ciudad"
					v-model="formData.ciudad"
					required
				/>
			</div>

			<div class="form-group">
				<label for="mensaje">Mensaje</label>
				<textarea
					id="mensaje"
					name="mensaje"
					v-model="formData.mensaje"
					placeholder="Escribe tu mensaje aquí"
					required
				></textarea>
			</div>
			<base-button type="submit">Enviar</base-button>
		</form>
	</div>
</template>

<script setup>
import { ref, reactive } from "vue";

const formData = ref({
	nombre: "",
	email: "",
	telefono: "",
	pais: "",
	ciudad: "",
	mensaje: "",
});

const errors = reactive({});
const isSubmitting = ref(false);

const submitForm = async () => {
	try {
		const response = await fetch("http://localhost:3000/send-email", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData.value),
		});

		if (response.ok) {
			alert("Mensaje enviado correctamente");
			formData.value = {
				nombre: "",
				email: "",
				telefono: "",
				pais: "",
				ciudad: "",
				mensaje: "",
			};
		} else {
			alert("Ocurrió un error al enviar el mensaje");
		}
	} catch (error) {
		console.log(error);
		alert("Ocurrió un error en la conexion intentalo mas tarde");
	}
};
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
	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
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
	textarea {
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
			border-color: red;
		}
	}

	textarea {
		resize: vertical;
		min-height: 100px;
	}
}
</style>
