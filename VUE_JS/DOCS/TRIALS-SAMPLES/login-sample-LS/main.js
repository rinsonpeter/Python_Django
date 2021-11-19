const app = new Vue({
    el: '#app',
    data: {
        email: '',
        pass: '',
        name: '',
        errors:[],
        valid:false,
        loginArray :[{
            storedEmail: 'rinson@gmail.com',
            storedPassword: 'rinson'
        }, {
            storedEmail: 'rinson1@gmail.com',
            storedPassword: 'rinson'
        }]
    },
    methods: {  
        login(e){
            this.valid=false
            
            localStorage.setItem("arrayLogin", JSON.stringify(this.loginArray));

            var locUsers = JSON.parse(localStorage.getItem("arrayLogin"));
            

            for(i=0;i<locUsers.length;i++){
                if((locUsers[i].storedEmail==this.email)&&(locUsers[i].storedPassword==this.pass)){

                    this.valid=true
                    break 
                }
            }
            if (this.valid)
                alert("login success")
            else
                alert("invalid credentials")   
            
                
            e.preventDefault()

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
        }


    }

})