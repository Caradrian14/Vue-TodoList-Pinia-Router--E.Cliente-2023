
<template>
    <AppTitle></AppTitle>
    <ListTodos></ListTodos>
</template>

<script>
import AppTitle from '../components/AppTitle.vue';
import ListTodos from '../components/ElementTodo.vue';

export default {
    components:{
        AppTitle,
        ListTodos,
    },
    mounted() {
        this.$mount('#app')
    }
}
</script>