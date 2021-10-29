<template>

<div class="container">
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4">
        <br /><br /><br /><br> <br>

        
        <h1>Login</h1>
        <br />
        <form
          name="myForm"
          action="/employees/postLogin/"
          method="post"
          onsubmit="">
          <input
            type="text"
            class="form-control"
            id="userName"
            name="username"
            placeholder="Email"
            required
          /><br />
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            placeholder="Password"
            required
          /><br />


          <br>
          <input type="submit" class="btn btn-primary"  style="background-color: rgb(36, 85, 95);
          margin-left: 40%;" value="LogIn" />
        </form>
      </div>
      <div class="col-4"></div>
    </div>
</div>    

</template>


