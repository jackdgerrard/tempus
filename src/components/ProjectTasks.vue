import NewTask from 'NewTask.vue'

<template>
<div id="dashboard">
  <router-link to="/" class="btn"><i class="material-icons">arrow_back</i></router-link>
  <ul classname="collection with-header">

    <h3 classname="collection-header">

      <h5>{{projectname}}</h5>

    </h3>

    <p v-if="tasks.length == 0">
      No tasks yet!
    </p>

    <li v-for="task in tasks" v-bind:key="task.id" class="collection-item">

      <div class="chip">
        {{task.priority}}
      </div>

      {{task.name}}
      <a @click="changeValue(task.task_id, task.status)" :style="{ cursor: 'pointer'}"><span v-if="task.status == 'to-do'" class="new badge blue" data-badge-caption="">{{task.status}}</span>
      <span v-if="task.status == 'in progress'" class="new badge green" data-badge-caption="">{{task.status}}</span>
      <span v-if="task.status == 'completed'" class="new badge red" data-badge-caption="">{{task.status}}</span></a>
      <router-link class="secondary-content" :to="{name: 'viewtask', params: {task_id: task.task_id}}">
        <i class="material-icons">arrow_forward</i>
      </router-link>

    </li>
    <div class="fixed-action-btn">
      <router-link :to="{name: 'newtask', params:{project_id: this.$route.params.project_id} }" class="btn-floating btn-large waves-effect waves-light">
        <i class="material-icons">add</i>
      </router-link>
    </div>
  </ul>
  </section>


  <div classname="container">
    <div id="allTasks">
      <figure v-if="tasks.length!=0" classname="completed" style="{width: completedTasks*100/allTasks + '%'}">
      </figure>
      {{completedTasks}} / {{allTasks}}
    </div>
    <div>
      <h4 class="center-align">
        {{completedTasks}} / {{allTasks}} Tasks Completed
    </h4>
    </div>
  </div>

  <button @click="deleteProject" class="btn red">Delete Project</button>
  <router-link v-bind:to="{name: 'editproject', params: {project_id: this.$route.params.project_id}}">
    <button class="btn blue">
      <i class="material-icons">mode_edit </i>
            </button>
  </router-link>

</div>
<!-- ends dashboard -->
</template>

<script>
import db from "./firebaseInit";
import firebase from "firebase";
export default {
  name: "projecttasks",
  data() {
    return {
      tasks: [],
      projectname: null,
      allTasks: 0,
      completedTasks: 0
    };
  },
  created() {
    db
      .collection("Tasks")
      .where("project_id", "==", this.$route.params.project_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            name: doc.data().name,
            desc: doc.data().desc,
            status: doc.data().status,
            priority: doc.data().priority,
            project_id: doc.data().project_id,
            task_id: doc.data().task_id
          };
          this.tasks.push(data);
          if (data.status == "completed") {
            this.completedTasks++;
          }
        });
        this.allTasks = this.tasks.length;
      });
    db
      .collection("projects")
      .where("project_id", "==", this.$route.params.project_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const projectData = {
            projectname: doc.data().name
          };
          this.projectname = projectData.projectname;
        });
      });
  },
  methods: {
    deleteProject() {
      //deletes all projects, and tasks associated with them
      db
        .collection("projects")
        .where("project_id", "==", this.$route.params.project_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            db
              .collection("Tasks")
              .where("project_id", "==", this.$route.params.project_id)
              .get()
              .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                  doc.ref.delete();
                });
              });
            doc.ref.delete();
            this.$router.push("/");
          });
        });
    },
    changeValue(taskid, taskstatus) {
      let indx = 0;
      for (let x = 0; x < this.tasks.length; x++) {
        if (this.tasks[x].task_id == taskid) {
          indx = x;
        }
      }


      db.collection('Tasks').where('task_id', '==', taskid).get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (taskstatus == 'to-do') {
            this.tasks[indx].status = 'in progress'
            doc.ref.update({
              status: 'in progress'
            })
          } else if (taskstatus == 'in progress') {
            this.completedTasks++
              this.tasks[indx].status = 'completed'
            doc.ref.update({
              status: 'completed'
            })
          } else {
            this.completedTasks--
              this.tasks[indx].status = 'to-do'
            doc.ref.update({
              status: 'to-do'
            })
          }
        })
      })
    }
  }
}
</script>
<style scoped>
</style>
