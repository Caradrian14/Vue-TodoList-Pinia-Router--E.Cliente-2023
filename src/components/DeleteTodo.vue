<template>
    <h2>Vas a borrar la tarea:</h2>
    <tr class="text-success text-center">
    <td>{{ todo.id }}</td>
    <td>{{ todo.title }}</td>
    <td>{{ todo.done }}</td>
  </tr>
  <div><br /><button @click="delTodos">Borrar toda la lista</button></div>
</template>

<script>
import { useCounterStore } from "../stores/counter";
import { mapState, mapActions } from "pinia";
export default {
  props: {
    id: String,
  },
  methods: {
    ...mapActions(useCounterStore, ['getTodoById']),
    delTodos() {
      alert("Vas a borra la lista");
      if (confirm("¿Deseas borrar toda la lista de cosas a hacer?")) {
        //Modificar esto
        var todo = this.getTodoById(Number(this.id));
      }
    },
  },
};
</script>
