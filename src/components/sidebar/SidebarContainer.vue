<template>
  <!--  <nav class="sidebar navbar bg-dark">-->
  <nav class="navbar-nav sidebar-container bg-dark">
    <!--    iterate v-for and instantiate child compos this way -->
    <SidebarItem v-for="item in items" :key="item.id" :title="item.title" />
  </nav>
  <!--  </nav>-->
</template>

<script setup>
import { ref } from "vue";
import SidebarItem from "@/components/sidebar/SidebarItem.vue";
// const widebar = ref(false);
const items = ref([
  { id: 1, title: "Foo" },
  { id: 2, title: "Bar" },
  { id: 3, title: "Bal" },
  { id: 4, title: "Baz" },
]);
</script>

<style>
.sidebar {
}

.sidebar-container {
  /* already set in navbar-nav */
  /*display: flex;*/
  /*flex-direction: column;*/
  width: 10rem;
  border: 1px hotpink solid;
  justify-content: start;
  align-items: center;
}
</style>
