<template>
  <table class="table table-striped table-hover table-responsive">
    <thead class="bg-dark">
      <tr class="text-white text-center">
        <th>Id</th>
        <th>Titulo</th>
        <th>Terminada</th>
        <th>Eliminar Tarea</th>
        <th>Abrir Tarea</th>
        <th>Finalizar Tarea</th>
      </tr>
    </thead>
    <tbody id="tableProducts">
      <!-- AQUI INSERTAMOS -->

      <ElementTodo
        v-for="element in todos"
        :key="element"
        :todo="element"
        class="text-success"
      ></ElementTodo>
    </tbody>
  </table>
</template>

<script>
import { useCounterStore } from "../stores/counter";
import ElementTodo from "./ElementTodo.vue";
import { mapState, mapActions } from "pinia";
export default {
  components: {
    ElementTodo,
  },
  computed: {
    ...mapState(useCounterStore, {
      todos: "todos",
    }),
  },
};
</script>

<style></style>
