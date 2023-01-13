
import AddTodos from '../components/AddTodos.vue';

<template>
    <AppTitle></AppTitle>
    <AddTodos></AddTodos>
</template>

<script>
import AddTodos from '../components/AddTodos.vue';
import AppTitle from '../components/AppTitle.vue';


export default {
    components:{
        AppTitle,
        AddTodos,
    },
    mounted() {
        this.$mount('#app')
    }
}
</script>