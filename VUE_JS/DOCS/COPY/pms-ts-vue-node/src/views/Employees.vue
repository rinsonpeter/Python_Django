<template>
  <div class="container">

    <p>{{ allEmp }}</p>

  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import EmployeeServices from '../services/EmployeeServices'

@Component({components: {},})
export default class Employees extends Vue {
  
    private dialog= false
    private dialogDelete= false
    private allEmp: any=[];

    public initialize(){
      alert("insied initialize")

      EmployeeServices.getAllEmp().then((response)=>{
        console.log(response)
        if (response.data){
          console.log("employees List::::::",response.data)
          this.allEmp=response.data
          //response.send(response.data)
        }
        else
          console.log("failed get all employees")

      })
    }

    mounted(){
      alert("insied mounted")
     this.initialize() 
    }
}    
</script>