bdate=Number(prompt("enter birth date: "))
bmonth=Number(prompt("enter birth month: "))
byear=Number(prompt("enter birth year: "))

cdate=Number(prompt("enter current date: "))
cmonth=Number(prompt("enter current month: "))
cyear=Number(prompt("enter current year: "))

alert("Date of birth:"+bdate+"/"+bmonth+"/"+byear)
alert("Current date:"+cdate+"/"+cmonth+"/"+cyear)

var Age=0;

if (byear<cyear){
    Age = (cyear - byear)
    }      
if (cmonth<bmonth){         
    Age=Age-1      
}          
if (bmonth==cmonth){        
    if (cdate<bdate){       
            Age=Age-1      
    }
}    
alert("Age:"+Age)