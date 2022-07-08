<template>
  <!--  <nav class="sidebar navbar bg-dark">-->
  <nav class="navbar-nav sidebar-container bg-dark">
    <!--    iterate v-for and instantiate child compos this way -->
    <SidebarItem
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
    />
    <SidebarRouterLink
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
    />

  </nav>
  <!--  </nav>-->
</template>

<script setup>
import { computed, ref } from "vue";
import SidebarItem from "@/components/sidebar/SidebarItem.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import SidebarRouterLink from "@/components/sidebar/SidebarRouterLink.vue";

// const widebar = ref(false);
const items = ref([
  { to: "/", title: "Home" },
  { to: "/bar", title: "Bar" },
  { to: "/register", title: "Register" },
  { to: "/login", title: "Login" },
]);

const routes = ref([
  { to: "/", title: "Home" },
  { to: "/bar", title: "Bar" },
  { to: "/register", title: "Register" },
  { to: "/login", title: "Login" },
]);

const router = useRouter();
const store = useStore();
const isLoggedIn = computed(() => {
  return store.getters.isAuthenticated;
});

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
