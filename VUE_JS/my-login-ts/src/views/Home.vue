<template>
  <v-layout align-center justify-center>
    <head>
  <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' rel="stylesheet">
</head>
    <v-flex xs12 sm8 md4><br><br>
      <v-card class="elevation-12">
        <v-toolbar dark color="purple">
          <v-toolbar-title>Login Form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form v-on:submit.prevent="onSubmit">
            <v-text-field
              prepend-icon="person"
              name="login"
              label="Login"
              id="login"
              type="text"
              v-model="email"
              required
            ></v-text-field>
            <v-text-field
              prepend-icon="lock"
              name="password"
              label="Password"
              id="password"
              type="password"
              v-model="pass"
              required

            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn dark color="pink"  v-on:click="login"  >Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>


//Typescript code
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Login extends Vue {
  private email= "";
  private pass = "";
  private valid = false;

  private loginArray: any= [
        {
          storedEmail: "rinson@gmail.com",
          storedPassword: "rinson",
        },
        {
          storedEmail: "rinson1@gmail.com",
          storedPassword: "rinson",
        },
      ];
  $router: any;

    login () {
      this.valid = false;

      localStorage.setItem("arrayLogin", JSON.stringify(this.loginArray));
      var locUsers= JSON.parse(localStorage.getItem("arrayLogin"));

      for (var i = 0; i < locUsers.length; i++) {
        if (
          locUsers[i].storedEmail == this.email &&
          locUsers[i].storedPassword == this.pass
          )
        {
          this.valid = true;
          var myMail = this.email;

          break;
        }
      }
      if (this.valid) {
 //       console.log("MYMAil------",myMail)
        alert("login success");
        this.$router.push('/projects');
//        this.$store.dispatch("checkLogin", myMail);
      } else {
        alert("invalid credentials");
      }
    } 
}
</script>