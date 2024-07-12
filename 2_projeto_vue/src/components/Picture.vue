<template>
    <div>
        <img :src="avatar" :alt="descricao">
        <MudarImagem @mudar-imagem="mudarImagem" />
    </div>
</template>

<script>
import Reutilizacao from './Reutilizacao.vue';
import MudarImagem from './MudarImagem.vue';

export default {
    name: 'Picture',
    components: {
        Reutilizacao,
        MudarImagem
    },
    methods: {
        mudarImagem() {
            this.avatar = '/img/avatar2.png'
        }
    },
    data() {
        return {
            avatar: '/img/avatar.png',
            descricao: "Matheus Battisti"
        }
    }
}
</script>