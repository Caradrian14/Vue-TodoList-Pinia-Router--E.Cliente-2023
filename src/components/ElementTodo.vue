<template>
  <tr class="text-success text-center">
    <td>{{ todo.id }}</td>
    <td>{{ todo.title }}</td>
    <td>{{ todo.done }}</td>
    <td>
      <button class="btn btn-secondary delete">
        <span class="material-icons" @click="quitProd">Borrar</span>
      </button>
    </td>
    <td>
      <button class="btn btn-secondary open">
        <span class="material-icons" @click="quitProd">Abrir</span>
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
    quitProd(){
        this.$router.push(`/delete/${this.todo.id}`);
    },
    ...mapActions(useCounterStore, ['finishTodo']),
    finishThisTodo(){
      this.finishTodo(this.todo.id)
    }
  }
};
</script>

<style></style>
