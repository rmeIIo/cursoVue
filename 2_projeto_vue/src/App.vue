<template>
  <div>
    <PrimeiroComponenteVue/>
    <p>O dado de app é {{  testando  }}</p>
  </div>
</template>

<script>
  import PrimeiroComponenteVue from "./components/PrimeiroComponente.vue";
  export default {
    name: "App",
    components: {
      PrimeiroComponenteVue,
    },
    data() {
      return {
        testando: "testando"
      }
    }
  };
</script>
