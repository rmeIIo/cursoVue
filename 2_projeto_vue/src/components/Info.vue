<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Estou em busca de novas oportunidades!</p>
        <p>Utilizo as seguintes tecnologias para backend:</p>

        <ul>
            <li v-for="(technology, index) in backend_technologies" :key="index">{{ technology }}</li>
        </ul>

        <p>Utilizo as seguintes tecnologias para frontend:</p>
        <ul>
            <li v-for="technology in frontend_technologies" :key="technology.id">{{ technology.language }}</li>
        </ul>

        <div>
            <button @click="showEmail">{{ textoBotao }}</button>
        </div>

        <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
        <p>Para acessar meu portfolio <a v-bind:href="meu_link" target="_blank">basta clica aqui</a></p>
        <Picture/>
    </div>
</template>

<script>
import Picture from './Picture.vue'

export default {
    name: "Info",
    components: {
        Picture,
    },
    data() {
        return {
            esta_trabalhando: false,
            mostrar_email: false,
            email: 'j.roger@mail.com',
            meu_link: 'https://google.com',
            textoBotao: 'Mostrar email',
            backend_technologies: ['JavaScript', 'PHP', 'Python'],
            frontend_technologies: [
                {id: 1, language: 'HTML'},
                {id: 2, language: 'CSS'},
                {id: 3, language: 'Vue'},
            ]
        }
    },
    methods: {
        showEmail() {
            this.mostrar_email = !this.mostrar_email
            if(!this.mostrar_email) {
                this.textoBotao = 'Mostrar email'
            } else {
                this.textoBotao = 'Ocultar email'
            }
        }
    }
}
</script>