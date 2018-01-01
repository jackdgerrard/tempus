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
          <input type="text" v-model="name" required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="desc">
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="assignee">
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="type">
        </div>
      </div>



      <button type="submit" class="btn">Submit</button>
      <router-link to="/" class="btn grey"> Cancel </router-link>
    </form>
  </div>
</div>
</template>


<script>
import db from './firebaseInit'
export default {
  name: 'newTask',
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
    updateTask() {
      db.collection('Tasks').where('task_id', '==', this.$route.params.task_id).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                doc.ref.update({
                  task_id: this.task_id,
                  name: this.name,
                  desc: this.desc,
                  completed: this.completed,
                  assignee: this.assignee,
                  date: this.date,
                  type: this.type
                }).then(() =>{
                  this.$router.push({name: 'viewtask', params: {task_id: this.task_id}})
          })
        })
      })
    }
  }
}
</script>
