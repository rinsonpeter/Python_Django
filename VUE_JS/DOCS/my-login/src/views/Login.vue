<template>
  <div class="container">
    <form >
      Email :
      <input
        type="text"
        v-model="email"
        placeholder="Enter email"
        required
      /><br /><br />
      password:
      <input
        type="password"
        v-model="pass"
        placeholder="Enter Password"
        required
      /><br /><br />

      <input type="button" v-on:click="login" value="submit" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      pass: "",
      name: "",
      errors: [],
      valid: false,
      loginArray: [
        {
          storedEmail: "rinson@gmail.com",
          storedPassword: "rinson",
        },
        {
          storedEmail: "rinson1@gmail.com",
          storedPassword: "rinson",
        },
      ],
    };
  },

  methods: {
    login(e) {
      this.valid = false;

      localStorage.setItem("arrayLogin", JSON.stringify(this.loginArray));

      var locUsers = JSON.parse(localStorage.getItem("arrayLogin"));

      for (var i = 0; i < locUsers.length; i++) {
        if (
          locUsers[i].storedEmail == this.email &&
          locUsers[i].storedPassword == this.pass
        ) {
          this.valid = true;
          var myMail = this.email;

          break;
        }
      }
      if (this.valid) {
        console.log("MYMAil;;;;;",myMail)
        alert("login success");
        this.email=null
        this.pass=null
        this.$store.dispatch("checkLogin", myMail);
        // e.preventDefault();
      } else {
        alert("invalid credentials");
        // e.preventDefault();
      }

      e.preventDefault();
      // for(i=0;i<locUsers.length;i++){
      //     if((locUsers[i].storedEmail==this.email)&&(locUsers[i].storedPassword==this.pass)){

      //         this.valid=true
      //         break
      //     }
      // }
      // if (this.valid)
      //     alert("login success")
      // else
      //     alert("invalid credentials")

      // e.preventDefault()
    },
  },
};
</script>





