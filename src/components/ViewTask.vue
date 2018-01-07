<template>
<div id="viewtask">
  <ul class="collection with-header">
    <li class="collection-header">
      <h4>{{name}}</h4></li>
    <li class="collection-item"> Date created: {{date}}</li>
    <li class="collection-item"> Type: {{type}}</li>
    <li class="collection-item"> Completed: {{completed}}</li>
    <li class="collection-item"> Description: {{desc}}</li>
    <li class="collection-item"> Assigned: {{assignee}}</li>
    <li class="collection-item"> Task ID: {{task_id}}</li>

    <router-link to="/" class="btn grey">Back </router-link>
    <button @click="deleteTask" class="btn red">Delete</button>
  </ul>

  <div class="fixed-action-btn">
    <router-link v-bind:to="{name: 'edittask', params: {task_id: task_id}}" class="btn-floating btn-large blue">
      <i class="fa fa-pencil"></i>
    </router-link>
  </div>
</div>
</template>


<script>
import db from './firebaseInit'
export default {
  name: 'viewTask',
  data() {
    return {
      task_id: null,
      name: null,
      desc: null,
      completed: false,
      assignee: null,
      date: null,
      type: null
    }
  },
  beforeRouteEnter(to, from, next) {
    db.collection('Tasks').where('task_id', '==', to.params.task_id).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        next(vm => {
          vm.task_id = doc.data().task_id,
            vm.name = doc.data().name,
            vm.desc = doc.data().desc,
            vm.completed = doc.data().completed,
            vm.assignee = doc.data().assignee,
            vm.date = doc.data().date,
            vm.type = doc.data().type
        })
      })
    })
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      db.collection('Tasks').where('task_id', '==', this.$route.params.task_id).get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            this.task_id = doc.id,
            this.name = doc.data().name,
            this.desc = doc.data().desc,
            this.completed = doc.data().completed,
            this.assignee = doc.data().assignee,
            this.date = doc.data().date,
            this.type = doc.data().type
        })
      })
    },
    deleteTask() {
      db.collection('Tasks').where('task_id', '==', this.$route.params.task_id).get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          doc.ref.delete()
          this.$router.push('/')
        })
      })
    }
  }
}
</script>
