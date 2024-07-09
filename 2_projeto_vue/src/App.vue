<template>
  <div>
    <Header/>
    <PrimeiroComponenteVue/>
    <p>O dado de app é {{  testando  }}</p>
    <LifeCycle/>
    <Pessoa/>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import PrimeiroComponenteVue from "./components/PrimeiroComponente.vue";
  import LifeCycle from "./components/LifeCycle.vue";
  import Pessoa from "./components/Pessoa.vue";

  export default {
    name: "App",
    components: {
      Header,
      PrimeiroComponenteVue,
      LifeCycle,
      Pessoa
    },
    data() {
      return {
        testando: "testando"
      }
    }
  };
</script>

<style>
  body {
    background-color: #333;
    color: #fff;
  }

  a {
    color: red;
  }
</style>