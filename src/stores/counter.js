import { defineStore } from 'pinia'
import axios from 'axios'

const url = 'http://localhost:3000';

export const useCounterStore = defineStore('counter', {
  state() {
    return {
      todos: []
    }
  },

  actions: {
    delTodo(index) {
      var id = this.todos[index].id;
      axios.delete(url + '/todos/' + id)
        //cambiar esto
        .then(response => this.todos.splice(index, 1))
        .catch(response => alert('Error: no se ha borrado el registro. ' + response.message))
    },
    addTodo(title) {
      axios.post(url + '/todos', { title: title, done: false })
        .then(response => this.todos.push(response.data)
        )
        .catch(response => alert('Error: no se ha añadido el registro. ' + response.message))
    },
    loadData() {
      axios.get(url + '/todos')
        .then(response => response.data.forEach(element => {
          this.todos.push(element);
        }))
        .catch(response => {
          if (!response.status) {// Si el servidor no responde 'response' no es un objeto sino texto
            alert('Error: el servidor no responde');
            console.log(response);
          } else {
            alert('Error ' + response.status + ': ' + response.message);
          }
        })
    },
    delAllTodos() {
      this.todos.forEach(element => {
        this.delTodo(element.id)
      })
    },
    async getTodoById(id) {
      try {
        const response = await axios.get(url + '/todos/' + id)
        return response.data
      } catch (err) {
        console.log("Error");
      }
    },
    async finishTodo(id) {
      await axios.patch(url + '/todos/' + id, {
        done: true
      })
      .then(
        this.todos.forEach(todo => {
          if (todo.id === id) {
            todo.done === true;
          }
        })
      )
      .catch(console.log("Error"))
    },
  }
})
