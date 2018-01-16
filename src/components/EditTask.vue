<template>
<div id="editTask">
  <h3>Add new Task</h3>
  <div class="row">
    <form @submit.prevent="updateTask" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="task_id" disabled required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="name" >
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="desc" >
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="priority" >
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="status" >
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="date" disabled>
        </div>
      </div>


      <button type="submit" class="btn">Submit</button>
      <router-link to="/" class="btn grey"> Cancel </router-link>
    </form>
  </div>
</div>
</template>


<script>
import moment from 'moment'
import db from './firebaseInit'
export default {
  name: 'editTask',
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
            vm.priority = doc.data().priority,
            vm.status = doc.data().status,
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
            this.priority = doc.data().priority,
            this.status = doc.data().status,
            this.date = doc.data().date,
            this.project_id = doc.data().project_id
        })
      })
    },
    updateTask() {
      db.collection('Tasks').where('task_id', '==', this.$route.params.task_id).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                doc.ref.update({
                  name: this.name,
                  desc: this.desc,
                  priority: this.priority,
                  status: this.status,
                }).then(() =>{
                  this.$router.push({name: 'viewtask', params: {task_id: this.task_id}})
          })
        })
      })
    }
  }
}
</script>
