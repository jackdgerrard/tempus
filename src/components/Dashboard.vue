<template>
  <div id="dashboard">
    <ul class="collection with-header">
      <li class="collection-header">
        <h5>Tasks</h5>
      </li>
      <li v-for="task in tasks" v-bind:key="task.id" class="collection-item">
        <div class="chip">#{{task.task_id}}</div>
        {{task.name}}
        <router-link class="secondary-content" v-bind:to="{name: 'viewtask', params: {task_id: task.task_id}}">
          <i class="fa fa-arrow-right"></i>
        </router-link>
      </li>
    </ul>
    <div class="fixed-action-btn">
    <router-link to="/new" class="btn-floating btn-large waves-effect waves-light">
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
        tasks: []
      }
    },
    created() {
      db.collection('Tasks').get().then(querySnapshot => {
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
    }
  }
</script>