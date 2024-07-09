<template>
    <div>
        <button @click="primeiro(mensagem1, $event), segundo(mensagem2, $event), terceiro()">Ativar multiplos eventos</button>
        <p>{{ multiplos_eventos }}</p>
    </div>
</template>

<script>
export default {
    name: "MultiplosEventos",
    data() {
        return {
            multiplos_eventos: '',
            mensagem1: 'Primeiro evento ativado',
            mensagem2: 'Segundo evento ativado'
        }
    },
    methods: {
        primeiro(mensagem, e) {
            this.multiplos_eventos = mensagem
        },
        segundo(mensagem, e) {
            setTimeout(() => this.multiplos_eventos = mensagem, 2000)
        },
        terceiro() {
            setTimeout(() => {
                this.multiplos_eventos = ''
            }, 3500);
        }
    }
}
</script>

<style scoped>
    div {
        margin: 100px;
    }
</style>