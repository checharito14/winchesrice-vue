<template>
    <teleport to="body">
        <div v-if="show" @click="tryClose" class="backdrop"></div>
        <transition name="dialog">
            <dialog open v-if="show">
                <header>
                    <slot name="header">
                        <h3>{{ title }}</h3>
                    </slot>
                </header>
                <section>
                    <slot></slot>
                </section>
                <menu v-if="!fixed">
                    <slot name="actions">
                        <base-button @click="tryClose">Aceptar</base-button>
                    </slot>
                </menu>
            </dialog>
        </transition>
    </teleport>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: true,
        },
        title: {
            type: String,
            required: false,
        },
        fixed: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    emits: ['close'],
    methods: {
        tryClose() {
            if (this.fixed) {
                return;
            }
            this.$emit('close');
        },
    },
};
</script>

<style scoped lang="scss">
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 10;
    backdrop-filter: blur(2px);
}

dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 400px;
    z-index: 100;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    padding: 0;
    margin: 0;
    overflow: hidden;
    background-color: $blanco;
}

header {
    background-color: transparent;
    color: $gris-oscuro;
    width: 100%;
    padding: 2rem 2rem 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);

    h3 {
        margin: 0;
        font-size: 1.4rem;
        font-weight: 600;
    }
}

section {
    padding: 1.5rem 2rem;
    color: $gris-oscuro;
    line-height: 1.6;
}

menu {
    padding: 1rem 2rem 2rem;
    display: flex;
    justify-content: flex-end;
    margin: 0;
    gap: 0.75rem;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: translate(-50%, -45%);
}

.dialog-enter-active {
  transition: all 0.3s ease-out;
}

.dialog-leave-active {
  transition: all 0.2s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: translate(-50%, -50%);
}

@media (min-width: 768px) {
    dialog {
        width: 400px;
    }
}
</style>
