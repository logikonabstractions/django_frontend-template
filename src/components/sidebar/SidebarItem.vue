<template>
  <div class="container-item">
    <a href="#" class="nav-link active">
      <font-awesome-icon icon="fa-brands fa-vuejs" />
      <span v-if="widebar">{{ title }}</span>
    </a>
  </div>
</template>

<script setup>
// import { ref } from "vue";

const props = defineProps({ title: String,
                                  widebar: Boolean});
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
