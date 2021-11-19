<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4
      ><br /><br />
      <v-card class="elevation-12">
        <v-toolbar dark color="purple">
          <v-toolbar-title >Login Form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form  >
            <v-text-field
              prepend-icon="person"
              name="login"
              label="Login"
              id="login"
              type="text"
              v-model="body.username"
              required
            ></v-text-field>
            <v-text-field
              prepend-icon="lock"
              name="password"
              label="Password"
              id="password"
              type="password"
              v-model="body.password"
              required
            ></v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn dark color="pink" @click="login">Login</v-btn>
        </v-card-actions>

          </v-form>
        </v-card-text>
        
      </v-card>
      
    </v-flex>
  </v-layout>
</template>


//Typescript code
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import EmployeeServices from '../services/EmployeeServices'

@Component
export default class Login extends Vue {

    private body = {
    username: "",
    password: "",

};

  
  $router: any;
  $store: any;

    login(){
      console.log("inside loffgin")
      EmployeeServices.loginAuth(this.body)
      .then((response) => {
        console.log(response)
        if (response.data){
            console.log("success")
            this.$store.dispatch("checkLogin", response.data.usertype)
            this.$router.push('/employees');
        }
        else{
            console.log("failde")
            alert("invalid credentials");
        }
      })
    }
}   
</script>