<template>
  
    <!-- Start of Navigation -->
    <nav fixed>
      <!-- Start of app toolbar -->
      <v-toolbar fixed app dark >
        <v-toolbar-side-icon
          @click.stop="drawer = !drawer"
          class="hidden-md-and-up"
        ></v-toolbar-side-icon><i class="fa fa-fw fa-home"></i>
        <v-toolbar-title class="headline text-uppercase"
          >RinzCorp</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat to="/projects">Projects</v-btn>
          <v-btn flat to="/employees">Employees</v-btn>


          <v-btn flat to="/" exact title="logout?" > <i class="fa fa-sign-out" aria-hidden="true"></i></v-btn>
          
          

        </v-toolbar-items>
      </v-toolbar>
      <!-- End of app toolbar -->


      <!-- End of mobile side menu -->
    </nav>
    <!-- End of Navigation -->

  
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        drawer: false // Hide mobile side menu by default
      };
    }
  };
</script>


<style>
  /* .v-application--wrap {
    min-height: 0vh !important;
  } */
</style>