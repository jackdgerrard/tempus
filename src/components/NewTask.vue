<template>
<div id="newTask" class="page-footer z-depth-4">
  <div class="container">
    <h3>Add new Task</h3>
    <form @submit.prevent="creatTask" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="project_id" disabled required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="task_id" required>
          <label>Task ID#</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="name" required>
          <label>Task name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="desc">
          <label>Description</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="assignee">
          <label>Assigned person</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="type">
          <label>Type</label>
        </div>
      </div>



      <button type="submit" class="btn">Submit</button>
      <router-link  :to="{name: 'projecttasks', params:{project_id: this.$route.params.project_id} }" class="btn grey"> Cancel </router-link>
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
      type: null,
      project_id: this.$route.params.project_id
    }
  },
  methods: {
    creatTask() {
      db.collection('Tasks').add({
        task_id: this.task_id,
        name: this.name,
        desc: this.desc,
        completed: this.completed,
        assignee: this.assignee,
        date: this.date,
        type: this.type,
        project_id: this.$route.params.project_id
      }).then(docRef => this.$router.push('/' + this.$route.params.project_id))
    }
  }
}
</script>
