//var num = document.querySelector("#num");
//console.log(text.value)
function display(num1){
    let data =num.value+num1;
    num.value= data;
}

function clrscr() {
    num.value = " ";
}

function calculate() {
    let data = num.value;
    let res = eval(data);
    num.value = res;
}


