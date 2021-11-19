import http from "../http-common";


class EmployeeServices {
 $store: any

  getHomepage(id: any) {
  
    return http.get(`/homepage/${id}`) 
    }
  
  loginAuth(data:any){
    return http.post(`/employees/postLogin`,data) 
  }

}

export default new EmployeeServices();