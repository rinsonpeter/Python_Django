import http from "../http-common";


class EmployeeServices {
 $store: any

    getAllEmp(){
    return http.get(`/employees/`) 
  }
  
  loginAuth(data:any){
    return http.post(`/employees/postLogin`,data) 
  }

}

export default new EmployeeServices();