<template>
<footer class="page-footer">
    <div class="container">
        <div class="row">
            <div class="col l6 s12">
                <h5>Tempus</h5>
                <p>Created by: <br/> <a href="https://github.com/Snowbird4">
Rokas Mikalauskas</a><br/> and <a href="http://jackdgerrard.github.io">Jack Gerrard</a>  </p>
            </div>
            <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Using:</h5>
                <ul>
                  <li><a  href="https://firebase.google.com/">Firebase</a></li>
                  <li><a  href="http://materializecss.com/">Materialize</a></li>
                  <li><a  href="https://vuejs.org/">Vue.JS</a></li>
                  <li><a  href="https://webpack.github.io/">Webpack</a></li>
                  <li><a  href="https://github.com">GitHub</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
             <i class="material-icons">&#xE90C;</i> {{ new Date().getFullYear() }} Tempus Project
            </div>
          </div>
</footer>
</template>

<script>
export default {
  name: "VueFooter"
};
</script>
