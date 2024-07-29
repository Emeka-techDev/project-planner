<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current"/>
    <div v-for="project of displayFilter" v-bind:key="project.id" :current="current">
        <SingleProject :project="project"  @delete="handleDelete" @complete="handleComplete"/>
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue'
import FilterNav from '../components/FilterNav.vue';

export default {
  name: 'Home',
  components: { SingleProject, FilterNav },
  data() {
    return {
      projects: [],
      current: 'all'
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects')
      .then(res => res.json())
      .then(data => this.projects = data)
      .catch(err => {
        console.log(err);
      })

  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter(project => project.id != id);
    },
    handleComplete(id) {
      let p  = this.projects.find(project => project.id == id);
      p.complete = !p.complete;
      // console.log(JSON.stringify(project));
    }
  },
  computed : {
    displayFilter() {
      if (this.current == 'completed') {
        return this.projects.filter(project => project.complete);
      }
      else if (this.current == 'ongoing') {
        return this.projects.filter(project => !project.complete)
      } else {
        return this.projects;
      }
    }
  }
}
</script>

<style scoped>
    .home {
      margin: auto;
      width: 80%;
    }
</style>