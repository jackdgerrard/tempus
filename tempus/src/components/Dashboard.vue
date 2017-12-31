<template>
<div id="dashboard">
  <ul class="collection with-header">
    <li class="collection-header">
      <h5>Tasks</h5>
    </li>
    <li v-for="task in tasks" v-bind:key="task.id" class="collection-item">
      <div class="chip">#{{task.task_id}}</div>
      {{task.name}}

      <div class="secondary-content">
        <li class = "secondary-content"><a class="waves-effect waves-circle waves-light btn-floating">
    <i class="material-icons">keyboard_arrow_right</i></a></li>
      </div>

    </li>
  </ul>

  <div class="fixed-action-btn vertical click-to-toggle">
    <a class="btn-floating btn-large red">
      <i class="material-icons">library_add</i>
    </a>
    <ul>
      <!-- add when there is ability to add projects
    <li><a class="btn-floating blue"><i class="material-icons">add_to_photos</i></a></li>
    -->
      <li><a class="btn-floating blue"><i class="material-icons">add_box</i></a></li>
    </ul>
  </div>
</div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'dashboard',
  data() {
    return {
      tasks: []
    }
  },
  created() {
    db.collection('Tasks').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'id': doc.id,
          'task_id': doc.data().task_id,
          'name': doc.data().name,
          'desc': doc.data().desc,
          'completed': doc.data().completed,
          'assignee': doc.data().assignee,
          'date': doc.data().date,
          'type': doc.data().type
        }
        this.tasks.push(data)
      })
    })
  }
}
</script>
