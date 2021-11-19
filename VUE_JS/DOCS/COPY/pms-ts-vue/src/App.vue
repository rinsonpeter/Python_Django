<template>
<v-app>
  <!-- <Header></Header> -->


   <div class="d-flex pa-2" style="margin-bottom: 34px; margin-top: 56px;">
    
    <v-main>          
      <router-view/>
    </v-main>

   </div>

  <!-- <Footer />   -->
</v-app>  
</template>

<script lang="ts">
import Vue from 'vue';

//import Header from "./components/Header.vue";
//import Footer from "./components/Footer.vue";


export default Vue.extend({
  name: 'App',

   components: {
      //  Header,
      //  Footer,
       
    },
  

  data: () => ({
    //
  }),


});
</script>
<style scoped>

.theme--light.v-application {
    background: #f7f7f7;;
    
}

</style>