<template>
  <app-title></app-title>

  <router-view></router-view>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import { mapState, mapActions } from "pinia";
import AddTodos from "./components/AddTodos.vue";
import AppTitle from "./components/AppTitle.vue";
import ListTodos from "./components/ElementTodo.vue";
import DelAllTodos from "./components/DeleteTodo.vue";
import { useCounterStore } from "./stores/counter";

export default {
  components: {
    AppTitle,
    ListTodos,
    AddTodos,
    DelAllTodos,
  },
  methods: {
    ...mapActions(useCounterStore, ["loadData"]),
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style scoped></style>
