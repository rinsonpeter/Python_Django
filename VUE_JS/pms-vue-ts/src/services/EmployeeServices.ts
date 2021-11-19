import http from "../http-common";


class EmployeeServices {
    $store: any

    getAllEmp() {
        return http.get(`/employees/`)
    }

    loginAuth(data: any) {
        return http.post(`/employees/postLogin`, data)
    }
    
    //   }
    editEmp(id: any,data: any){
        return http.post(`/employees/edit/${id}`,data)
    }
    addEmployee(data: any){
        return http.post('/employees/create',data)
    }
    
    deleteEmployee(id: any){
        return http.delete(`/employees/delete/${id}`);
      }    

}

export default new EmployeeServices();