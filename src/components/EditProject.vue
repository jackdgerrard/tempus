<template>
<div id="editproject">
  <h3>Edit Project Details</h3>
  <div class="row">
    <form @submit.prevent="updateProject" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="project_id" disabled required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="name" required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="date" disabled required>
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
import moment from 'moment'
export default {
  name: 'editproject',
  data() {
    return {
      project_id: null,
      name: null,
      date: null,
    }
  },
  beforeRouteEnter(to, from, next) {
    db.collection('projects').where('project_id', '==', to.params.project_id).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        next(vm => {
            vm.project_id = doc.data().project_id,
            vm.name = doc.data().name,
            vm.date = moment.unix(doc.data().date).format("MM/DD/YYYY HH:mm")
        })
      })
    })
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      db.collection('projects').where('project_id', '==', this.$route.params.project_id).get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            this.project_id = doc.id,
            this.name = doc.data().name,
            this.date = doc.data().date
        })
      })
    },
    updateProject() {
      db.collection('projects').where('project_id', '==', this.$route.params.project_id).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                doc.ref.update({
                  name: this.name
                }).then(() =>{
                  this.$router.push({name: 'projecttasks', params: {project_id: this.project_id}})
          })
        })
      })
    }
  }
}
</script>
