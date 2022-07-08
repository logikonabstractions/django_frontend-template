<script setup>
// import { RouterLink, RouterView } from "vue-router";
import Sidebar from "@/components/sidebar/SidebarContainer.vue";
import BarView from "@/views/BarView.vue";
import FooView from "@/views/FooView.vue";
</script>

<template>
  <div class="wrapper">
    <Sidebar />
    <div class="mygrid-layout">
      <BarView />
      <FooView />
      <BarView />
      <FooView />
      <BarView />
      <FooView />
      <BarView />
      <FooView />
    </div>

    <!--    <Sidebar/>-->
    <!--    <router-link :to="{name:'foo'}">Foo</router-link>-->
    <!--    <router-link :to="{name:'bar'}">Bar</router-link>-->
    <!--    <RouterView/>-->
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
