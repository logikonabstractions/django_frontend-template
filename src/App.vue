<template>
  <div class="wrapper">
    <Sidebar v-if="isLoggedIn" />
<!--    <Sidebar />-->
    <RouterView />
  </div>
</template>

<script setup>
// import { RouterLink, RouterView } from "vue-router";
import Sidebar from "@/components/sidebar/SidebarContainer.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

// import BarView from "@/views/BarView.vue";
// import FooView from "@/views/FooView.vue";
// import MainContent from "@/components/main_content/MainContent.vue";
const isLoggedIn = computed(() => {
  console.log("User is logged in: " + store.getters.isAuthenticated);
  return store.getters.isAuthenticated;
});
</script>

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
  justify-content: center;
  border: 1px teal solid;
}
</style>
