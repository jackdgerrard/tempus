<template>
<div id="dashboard page-footer z-depth-4">
  <ul class="collection with-header">
    <li class="collection-header">
      <h5>{{projectname}}</h5>
    </li>
    <li v-if="tasks.length == 0">
      No tasks yet!
    </li>
    <li v-for="task in tasks" v-bind:key="task.id" class="collection-item">
      <div class="chip">{{task.task_id}}</div>
      {{task.name}}
      <a @click="changeValue(task.task_id, task.status)" :style="{ cursor: 'pointer'}"><span v-if="task.status == 'idle'" class="new badge blue" data-badge-caption="">{{task.status}}</span>
      <span v-if="task.status == 'in progress'" class="new badge green" data-badge-caption="">{{task.status}}</span>
      <span v-if="task.status == 'closed'" class="new badge red" data-badge-caption="">{{task.status}}</span></a>
      <router-link class="secondary-content" v-bind:to="{name: 'viewtask', params: {task_id: task.task_id}}">
        <i class="material-icons">arrow_forward</i>
      </router-link>
    </li>
  </ul>
  <div class="container">
    <div id="allTasks">
      <div class="completed" :style="{width: completedTasks*100/allTasks + '%'}">

      </div>
    </div>
    {{completedTasks}} / {{allTasks}}
  </div>
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
      tasks: [],
      projectname: null,
      allTasks: 0,
      completedTasks: 0
    }
  },
  created() {
    db.collection('Tasks').where('project_id', '==', this.$route.params.project_id).orderBy('date').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'id': doc.id,
          'task_id': doc.data().task_id,
          'name': doc.data().name,
          'desc': doc.data().desc,
          'status': doc.data().status,
          'priority': doc.data().priority,
          'date': doc.data().date,
          'project_id': doc.data().project_id
        }
        this.tasks.push(data)
        if (data.status == 'closed') {
          this.completedTasks++
        }
      })
      this.allTasks = this.tasks.length
    })
    db.collection('projects').where('project_id', '==', this.$route.params.project_id).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const projectData = {
          'projectname': doc.data().name
        }
        this.projectname = projectData.projectname
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
    },
    changeValue(taskid, taskstatus) {
      let indx = 0
      for (let x = 0; x < this.tasks.length; x++) {
        if (this.tasks[x].task_id == taskid) {
          indx = x
        }
      }

      db.collection('Tasks').where('task_id', '==', taskid).get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (taskstatus == 'idle') {
            this.tasks[indx].status = 'in progress'
            doc.ref.update({
              status: 'in progress'
            })
          } else if (taskstatus == 'in progress') {
            this.completedTasks++
            this.tasks[indx].status = 'closed'
            doc.ref.update({
              status: 'closed'
            })
          } else {
            this.completedTasks--
            this.tasks[indx].status = 'idle'
            doc.ref.update({
              status: 'idle'
            })
          }
        })
      })
    }
  }
}
</script>
<style scoped>
.completed {
  color: white;
  background-color: #2ECC40;
  height: 50px;

}

#allTasks {
  width: 100%;
  background-color: black;
  margin-bottom: 10px;
}
</style>
