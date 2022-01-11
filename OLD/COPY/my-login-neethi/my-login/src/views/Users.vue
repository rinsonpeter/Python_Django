<template>
  <div> 
        <h1>USER EMAIL</h1> 
         <h3>{{getNames}}</h3>       
         
  </div>
</template>

<script>
export default {
  //name: 'loggedIn',
  computed: {
      getNames () {
      return this.$store.getters.getNames
    }
  }
}
</script>
<style scoped>
.users_list {
    text-align: center;

}
.users_list li {
    text-align: left;
    margin: 0 50%;
}
</style>
