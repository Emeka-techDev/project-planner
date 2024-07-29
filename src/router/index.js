import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AddForm from '../views/AddForm.vue';
import EditProject from '../views/EditProject.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-form',
    name: 'AddForm',
    component: AddForm
  },
  {
    path: '/projects/:id',
    name: 'EditProject',
    component: EditProject,
    props: true
  }


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
