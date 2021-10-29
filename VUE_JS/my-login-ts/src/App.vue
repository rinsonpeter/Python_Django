<template>
  <v-app>
    <!-- Start of Navigation -->
    <nav>
      <!-- Start of app toolbar -->
      <v-toolbar app dark>
        <v-toolbar-side-icon
          @click.stop="drawer = !drawer"
          class="hidden-md-and-up"
        ></v-toolbar-side-icon>
        <v-toolbar-title class="headline text-uppercase"
          >RinzCorp</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat to="/" exact>Home</v-btn>
          <v-btn flat to="/about">About</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <!-- End of app toolbar -->

      <!-- Start of mobile side menu -->
      <v-navigation-drawer app v-model="drawer" right>
        <!-- Menu title -->
        <v-toolbar flat>
          <v-list>
            <v-list-tile>
              <v-list-tile-title class="title">Menu</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-divider></v-divider>
        <!-- Menu Links -->
        <v-list>
          <v-list-tile to="/" exact>
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>Home</v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/about">
            <v-list-tile-action>
              <v-icon>description</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>About</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <!-- End of mobile side menu -->
    </nav>
    <!-- End of Navigation -->

    <v-content>
      <!-- Display view pages here based on route -->
      <router-view></router-view>
    </v-content>
  </v-app>
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