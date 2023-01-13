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
    deleteTodo(todoObject) {
      if(confirm("Quieres borrar el producto " + todoObject.title +" ?")){
        axios.delete(url+'/todos/'+todoObject.id)
        .then(
            response => {
                var indexArray = this.todos.findIndex(element => element.id === todoObject.id)
                this.todos.splice(indexArray,1);
            }
            )
                
            .catch(response => alert('Error: no se ha borrado el registro. ' + response.message))
      }
    },
    addTodo(title) {
      axios.post(url + '/todos', { title: title, done: false })
        .then(response => {this.todos.push(response.data)
          alert("Producto añadido");
        })
        .catch(response => alert('Error: no se ha añadido el registro. ' + response.message))
    },
    loadData() {
      axios.get(url + '/todos')
        .then(response => response.data.forEach(element => {
          this.todos.push(element);
        }))
        //se puede cambiar para que sea un this.todos = response.data
        .catch(response => {
          if (!response.status) {// Si el servidor no responde 'response' no es un objeto sino texto
            alert('Error: el servidor no responde');
            console.log(response);
          } else {
            alert('Error ' + response.status + ': ' + response.message);
          }
        })
    },
    deleteAll() {
      this.todos= [];
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
      .then(response =>{
        this.todos.forEach(todo => {
          if (todo.id === id) {
            todo.done = true;
          }
        })
      }
        
      )
      .catch(response=>console.log("Error:" + response))
    },
    async openTodo(id) {
      await axios.patch(url + '/todos/' + id, {
        done: false
      })
      .then(response =>{
        this.todos.forEach(todo => {
          if (todo.id === id) {
            todo.done = false;
          }
        })
      }
        
      )
      .catch(response=>console.log("Error:" + response))
    },
  }
})
