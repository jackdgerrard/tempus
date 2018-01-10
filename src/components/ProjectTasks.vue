<template>
<div id="dashboard page-footer z-depth-4">
  <ul class="collection with-header">
    <li class="collection-header">
      <h5>Tasks</h5>
    </li>
    <li v-for="task in tasks" v-bind:key="task.id" class="collection-item">
      <div class="chip">{{task.task}}</div>
      {{task.desc}}
      {{task.status}}
      <router-link class="secondary-content" v-bind:to="{name: 'viewtask', params: {task_id: task.task_id}}">
        <i class="material-icons">arrow_forward</i>
      </router-link>
    </li>
  </ul>
  <router-link to="/" class="btn grey">Back </router-link>
  <button @click="deleteProject" class="btn red">Delete Project</button>
  <router-link v-bind:to="{name: 'editproject', params: {project_id: this.$route.params.project_id}}">
    <button class="btn blue"> Edit Project </button>
  </router-link>
  <div class="fixed-action-btn">
    <router-link :to="{name: 'newtask', params:{project_id: this.$route.params.project_id} }" class="btn-floating btn-large waves-effect waves-light">
      <i class="material-icons">add</i>
    </router-link>
  </div>
</div>
</template>

<script>
import db from './firebaseInit'
import firebase from 'firebase'
export default {
  name: 'projecttasks',
  data() {
    return {
      tasks: []
    }
  },
  created() {
    db.collection('Tasks').where('project_id', '==', this.$route.params.project_id).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'id': doc.id,
          'task_id': doc.data().task_id,
          'name': doc.data().name,
          'desc': doc.data().desc,
          'completed': doc.data().completed,
          'assignee': doc.data().assignee,
          'date': doc.data().date,
          'type': doc.data().type
        }
        this.tasks.push(data)
      })
    })
  },
  methods: {
    deleteProject() {
      //deletes all projects, and tasks associated with them
      db.collection('projects').where('project_id', '==', this.$route.params.project_id).get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          db.collection('Tasks').where('project_id', '==', this.$route.params.project_id).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete()
            })
          })
          doc.ref.delete()
          this.$router.push('/')
        })
      })
    }
  }
}
</script>
