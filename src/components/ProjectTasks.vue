import NewTask from 'NewTask.vue'

<template>

<div id="dashboard">

  <modal name="new-task">
    {{NewTask}}
  </modal>

  <section classname="collection with-header">

    <h3 classname="collection-header">

      <h5>{{projectname}}</h5>

    </h3>

    <p v-if="tasks.length == 0">
      No tasks yet!
    </p>

    <ul>
      
      <li 
      v-for="task in tasks" 
      v-bind:key="task.id" 
      classname="collection-item">
      
        <div 
        v-if="task.priority!=0"
        classname="chip">
          {{task.priority}}
        </div> 
        
        {{task.name}}

        <a @click="changeValue(task.task_id, task.status)" :style="{ cursor: 'pointer'}">
          
        <span v-if="task.status == 'to-do'" classname="new badge red" data-badge-caption="">{{task.status}}</span>
        <span v-if="task.status == 'in progress'" classname="new badge blue" data-badge-caption="">{{task.status}}</span>
        <span v-if="task.status == 'complete'" classname="new badge green" data-badge-caption="">{{task.status}}</span>

        </a>

        <router-link classname="secondary-content" v-bind:to="{name: 'viewtask', params: {task_id: task.task_id}}">
          <i classname="material-icons">arrow_forward</i>
        </router-link>

      </li>
    </ul>
  </section>


  <div classname="container">
    <div id="allTasks">
      <figure 
      v-if="tasks.length!=0" 
      classname="completed" 
      style="{width: completedTasks*100/allTasks + '%'}">
      </figure>
      {{completedTasks}} / {{allTasks}}
    </div>
    
  </div>
  <router-link to="/" class="btn"><i class="material-icons">arrow_back</i></router-link>
  <button @click="deleteProject" class="btn red">Delete Project</button>

  <router-link v-bind:to="{name: 'editproject', params: {project_id: this.$route.params.project_id}}">
    <button class="btn blue"> Edit Project </button>
  </router-link>

</div> <!-- ends dashboard --> 
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
            project_id: doc.data().project_id
          };
          this.tasks.push(data);
          if (data.status == "closed") {
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
    methods: {
      show() {
        this.$modal.show("new-tasks");
      },
      hide() {
        this.$modal.hide("new-tasks");
      }
    },
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

      db
        .collection("Tasks")
        .where("task_id", "==", taskid)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            if (taskstatus == "in progress") {
              this.tasks[indx].status = "in progress";
              doc.ref.update({
                status: "in progress"
              });
            } else if (taskstatus == "completed") {
              this.completedTasks++;
              this.tasks[indx].status = "completed";
              doc.ref.update({
                status: "completed"
              });
            } else {
              this.completedTasks--;
              this.tasks[indx].status = "to-do";
              doc.ref.update({
                status: "to-do"
              });
            }
          });
        });
    }
  }
};
</script>
<style scoped>
/* moved to sass*/
</style>
