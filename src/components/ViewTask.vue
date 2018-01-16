<template>
<div id="viewtask" class="z-depth-4">
  <ul class="collection with-header">
    <li class="collection-header">
      <h4>{{name}}</h4></li>
    <li class="collection-item"> Date created: {{date}}</li>
    <li class="collection-item"> Priority: {{priority}}</li>
    <li class="collection-item"> Description: {{desc}}</li>
    <li class="collection-item"> Status: {{status}}</li>
    <li class="collection-item"> Task ID: {{task_id}}</li>

    <router-link :to="{name: 'projecttasks', params:{project_id: this.$route.params.project_id} }" class="btn grey">Back </router-link>
    <button @click="deleteTask" class="btn red">Delete</button>
  </ul>

  <div class="fixed-action-btn">
    <router-link v-bind:to="{name: 'editTask', params: {task_id: this.$route.params.task_id}}" class="btn-floating btn-large blue">
      <i class="fa fa-pencil"></i>
    </router-link>
  </div>
</div>
</template>


<script>
import moment from 'moment'
import db from './firebaseInit'
export default {
  name: 'viewTask',
  data() {
    return {
      task_id: null,
      name: null,
      desc: null,
      priority: 0,
      status: null,
      date: null,
      project_id: null
    }
  },
  beforeRouteEnter(to, from, next) {
    db.collection('Tasks').where('task_id', '==', to.params.task_id).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        next(vm => {
          vm.task_id = doc.data().task_id,
          vm.name = doc.data().name,
          vm.desc = doc.data().desc,
          vm.status = doc.data().status,
          vm.priority = doc.data().priority,
          vm.date = moment.unix(doc.data().date).format("MM/DD/YYYY HH:mm")
          vm.project_id = doc.data().project_id
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
            this.status = doc.data().status,
            this.priority = doc.data().priority,
            this.date = doc.data().date,
            this.project_id = doc.data().project_id
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
