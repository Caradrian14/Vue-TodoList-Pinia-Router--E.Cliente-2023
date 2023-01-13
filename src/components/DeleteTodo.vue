<template>
    <h2>Vas a borrar todas las tareas:</h2>
  <div><br /><button @click="delAllTodos">Borrar toda la lista</button></div>
</template>

<script>
import { useCounterStore } from "../stores/counter";
import { mapState, mapActions } from "pinia";
export default {
  props: {
    id: String,
  },
  methods: {
    ...mapActions(useCounterStore, ['deleteAll']),
    delAllTodos() {
      if (confirm("¿Deseas borrar toda la lista de cosas que hacer? Seguro que ya no tienes nada mas que hacer?")) {
        alert("Que mentiroso!!!")
        this.deleteAll();
      }
    },
  },
};
</script>
