<template>
<div id="dashboard page-footer z-depth-4">
  <ul class="collection with-header">
    <li class="collection-header">
      <h5>Projects</h5>
    </li>
    <li v-for="project in projects" v-bind:key="project.id" class="collection-item">
      <div class="chip">#{{project.project_id}}</div>
      {{project.name}}
      <router-link class="secondary-content" v-bind:to="{name: 'projecttasks', params: {project_id: project.project_id}}">
        <i class="fa fa-arrow-right">-></i>
      </router-link>
    </li>
  </ul>
  <div class="fixed-action-btn">
    <router-link to="/newproject" class="btn-floating btn-large waves-effect waves-light">
      <i class="material-icons">add</i>
    </router-link>
  </div>
</div>
</template>

<script>
import db from './firebaseInit'
import firebase from 'firebase'
export default {
  name: 'dashboard',
  data() {
    return {
      projects: []
    }
  },
  created() {
    db.collection('projects').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'id': doc.id,
          'project_id': doc.data().project_id,
          'name': doc.data().name,
          'date': doc.data().date,
        }
        this.projects.push(data)
      })
    })
  }
}
</script>
