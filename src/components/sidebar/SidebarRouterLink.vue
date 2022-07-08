<template>
  <div class="container-item">
    <router-link :to="foo">Foo</router-link>
    <router-link :to="bar">Bar</router-link>
  </div>
</template>

<script setup>
// import { ref } from "vue";

const props = defineProps({ routeName: String, id: Number });
// const widebar = ref(true);
</script>

<style scoped>
.container-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0.2rem 0.52rem;
}
</style>
