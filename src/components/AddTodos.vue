<template>
    <div>
        <input v-model="newTodo" type="text">
        <button @click="addNewTodo">Añadir</button>
    </div>
</template>

<script>
import { useCounterStore } from '../stores/counter';
import { mapState, mapActions } from 'pinia';
   export default {
    methods:{
      ...mapActions(useCounterStore, ['addTodo']),
      addNewTodo() {
            if (this.newTodo) {
              this.addTodo(this.newTodo);
              this.newTodo = '' 
            }
          }
    }
   }
</script>