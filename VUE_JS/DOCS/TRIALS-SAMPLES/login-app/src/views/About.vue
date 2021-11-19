<template>
  <div class="home">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Welcome to Assyst Learn</h1>
          <h2 class="subtitle">
           Login Now
          </h2>


 <div class="login-page">
                <div class="form">
                    <div class="login">
                        <div class="login-header">
                           
                            <p>Please enter your credentials to login.</p>
                        </div>

                        <form action="/" method="post" name="Form" onSubmit="">
                            <input type="text" name="userName" id="userName" class="input" placeholder="Username"><br><br>
                            <input type="password" name="password" id="password" class="input" placeholder="Password"><br><br>
                            <input style="background-color:rgb(42, 141, 60);" class="btn" type="submit" value="Login">
                        </form>
                    </div>
                </div>
            </div>




          <div class="button-block">
            <button class="button is-xl is-dark">
              Sign Up to Browse Events
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    name: 'home',
    components: {},
  };
</script>
