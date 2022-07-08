<template>
  <!--  <nav class="sidebar navbar bg-dark">-->
  <nav class="navbar-nav sidebar-container bg-dark">
    <SidebarItem title="Foo" widebar="widebar" />
    <SidebarItem title="Bar" widebar="widebar"  />
    <SidebarItem title="Baz" widebar="widebar"  />
    <SidebarItem title="Bal" widebar="widebar"  />
  </nav>
  <!--  </nav>-->
</template>

<script setup>
import { ref } from "vue";
import SidebarItem from "@/components/sidebar/SidebarItem.vue";
const widebar = ref(false);

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
