<template>
  <!--  <nav class="sidebar navbar bg-dark">-->
  <nav class="navbar-nav sidebar-container bg-dark">
    <SidebarRouterLink v-for="route in routes" :routeName="route.name" />
  </nav>
  <!--  </nav>-->
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import SidebarRouterLink from "@/components/sidebar/SidebarRouterLink.vue";

// const routes = ref([
//   { routeName: "foo", url: "/", title: "Foo" },
//   { routeName: "bar", url: "/bar", title: "Bar" },
//   // { to: "register", title: "Register" },
//   // { to: "login", title: "Login" },
// ]);

const routes = computed(() => {
  let rs = router.getRoutes();
  return router.getRoutes();
});

const router = useRouter();
const store = useStore();

async function logout() {
  await store.dispatch("LogOut");
  router.push("/login");
}
</script>

<style>
.sidebar {
}

.sidebar-container {
  /* already set in navbar-nav */
  /*display: flex;*/
  /*flex-direction: column;*/
  width: 12rem;
  border: 1px hotpink solid;
  justify-content: start;
  align-items: center;
}
</style>
