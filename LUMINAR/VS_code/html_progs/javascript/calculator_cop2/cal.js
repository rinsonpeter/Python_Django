var txt=document.querySelector("#text");

function display(num)
{
    let data=txt.value+num;
    txt.value=data;
}
function clrscr()
{
    txt.value="";
}

function equ()
{
let data=txt.value
let result=eval(data)
txt.value=result;
}