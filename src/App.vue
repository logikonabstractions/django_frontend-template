<script setup>
// import { RouterLink, RouterView } from "vue-router";
import Sidebar from "@/components/sidebar/SidebarContainer.vue";
// import BarView from "@/views/BarView.vue";
// import FooView from "@/views/FooView.vue";
// import MainContent from "@/components/main_content/MainContent.vue";

</script>

<template>
  <div class="wrapper">
    <Sidebar />
    <RouterView/>
  </div>
</template>

<style>
#app {
  padding: inherit;
  margin: inherit;
  border: 1px green solid;
}

.wrapper {
  padding: inherit;
  margin: inherit;
  display: flex;
  flex-direction: row;
  border: 1px teal solid;
}
</style>
