const MyNameApp = {
    data() {
        return {
            name: "Matheus",
            idade: 30,
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")