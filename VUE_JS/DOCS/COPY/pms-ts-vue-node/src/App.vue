<template>
  <v-app>
    <!-- <Header></Header> -->
    <Header />
      
      <div class=" router-style">
        <router-view></router-view>
      </div>
        
      
    <Footer />  
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default Vue.extend({
  name: "App",

  components: {
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
});
</script>
<style scoped>
.theme--light.v-application {
  background: #f7f7f7;
}

.router-style{
  margin-top:0px;
  margin-bottom:100px;
  
}
</style>