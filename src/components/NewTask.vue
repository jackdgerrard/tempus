<template>
  <div id="newTask" class=" z-depth-4">
    <router-link :to="{name: 'projecttasks', params:{project_id: this.$route.params.project_id} }" class="btn">
      <i class="material-icons">arrow_back</i>
    </router-link>
    <div class="container">

      <h3>Add new Task</h3>
      <form @submit.prevent="createTask" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required>
            <label>Task</label>
          </div>
        </div>

        <div class="row">
          <label>Priority</label>
          <br>
          <div class="input-field col s12">

            <input id="slider" type="range" min="1" max="5" step="1" onchange="priority()" />
            <div id="response">{{ response }}</div>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="desc">
            <label>details</label>
          </div>
        </div>


        <button type="submit" class="btn">Submit</button>

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
        name: null,
        desc: null,
        completed: false,
        assignee: null,
        date: null,
        type: null,
        project_id: this.$route.params.project_id
      }
      response:  ""
    },
    methods: {
      createTask() {
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
      },

      // function to be called when slider is changes
      priority(){

        //variable to be used in each step 
        let x = document.getElementById("slider").value;
        switch (x) {

          //if slider is on 1
          case "1":
            //print the value to console
            console.log(x);

            //change contents of response div to related feedback
            response = "!! URGENT !!";
            //end of case
            break;

          case "2":
            console.log(x);
            response = "TOP PRIORITY";
            break;

          case "3":
            console.log(x);
            response = "Moderately important";
            break;

          case "4":
            console.log(x);
            response = "Can Wait";
            break;

          case "5":
            console.log(x);
            response = "Low priority";
            break;

            //default behaviour in case of the above cases not working
          default:
            console.log(x);
            response += "";
            //end switch 
        }
        //end function
      }
    }
  }
</script>