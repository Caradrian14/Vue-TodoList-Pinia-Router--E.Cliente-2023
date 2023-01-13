<template>
  <tr class="text-success text-center">
    <td class="text-success">{{ todo.id }}</td>
    <td class="text-success">{{ todo.title }}</td>
    <p class="text-success">{{todo.done ? 'Completada' : 'Incompleta'}}</p>
    <td>
      <button class="btn btn-secondary delete">
        <span class="material-icons" @click="deleteThisTodo">Borrar</span>
      </button>
    </td>
    <td>
      <button class="btn btn-secondary open">
        <span class="material-icons" @click="openThisTodo">Abrir</span>
      </button>
    </td>
    <td>
      <button class="btn btn-secondary finish">
        <span class="material-icons" @click="finishThisTodo">Terminar</span>
      </button>
    </td>
  </tr>
</template>

<script>
import { useCounterStore } from '../stores/counter';
import { mapState, mapActions } from 'pinia';
export default {
  props: {
    todo: Object,
  },
  methods: {
    
    ...mapActions(useCounterStore, ['finishTodo', 'openTodo', 'deleteTodo']),
    finishThisTodo(){
      this.finishTodo(this.todo.id)
    },
    openThisTodo(){
      this.openTodo(this.todo.id)
    },
    deleteThisTodo(){
      this.deleteTodo(this.todo)
    },
  }
};
</script>

<style></style>
