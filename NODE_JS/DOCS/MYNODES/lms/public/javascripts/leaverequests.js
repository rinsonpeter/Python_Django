 

	date = new Date().toISOString().split('T')[0];
   
      // Form validation code will come here.
      function validate() {

               
          
                var e = document.getElementById("ddlleave");
                var strUser = e.options[e.selectedIndex].value;

                var strUser1 = e.options[e.selectedIndex].text;



                
                if(strUser==0)
                {
                    alert("Please select a  leave-type");
                    document.myForm.ddlleave.focus() ;
                    return false;
                }


        function trimfield(str) 
{ 
    return str.replace(/^\s+|\s+$/g,''); 
}
        
       var obj1 = document.getElementById('Reason');


        if(trimfield(obj1.value) == '') 
         {      
              alert("Please provide your reason!" );
              obj1.focus();
              return false;       
         }



        


               


        }


       
  
