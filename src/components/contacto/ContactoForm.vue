<template>
	<div class="form-container">
		<form action="">
			<div class="form-row">
				<!-- Nombre -->
				<div class="form-group">
					<label for="nombre">Nombre</label>
					<input type="text" id="nombre" name="nombre" required />
				</div>
				<!-- Email -->
				<div class="form-group">
					<label for="email">Email</label>
					<input type="email" id="email" name="email" required />
				</div>
			</div>
			<!-- Telefono -->
			<div class="form-group">
				<label for="telefono">Telefono</label>
				<input type="number" id="telefono" name="telefono" required />
			</div>
			<!-- Pais -->
			<div class="form-group">
				<label for="pais">País</label>
				<input type="number" id="pais" name="pais" required />
			</div>
			<!-- Ciudad -->
			<div class="form-group">
				<label for="ciudad">Ciudad</label>
				<input type="number" id="ciudad" name="ciudad" required />
			</div>

			<div class="form-group">
				<label for="mensaje">Mensaje</label>
				<textarea id="mensaje" name="mensaje" required></textarea>
			</div>
		</form>
	</div>
</template>

<style lang="scss" scoped>
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

	label {
		font-weight: bold;
		display: block;
		margin-bottom: 0.5rem;
	}

	input,
	textarea {
		display: block;
		width: 100%;
		border: 1px solid $gris
        ;
		font: inherit;
	}
}
</style>
