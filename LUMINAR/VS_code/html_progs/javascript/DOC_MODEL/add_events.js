var hone=document.querySelector("#one")

hone.addEventListener("click",()=>{
    hone.style.color="red";
    hone.textContent="Clicked";
})

var htwo=document.querySelector("#two")

htwo.addEventListener("mouseover",()=>{
    htwo.style.color="cyan"
    htwo.textContent="mouse overed"

})

var dbclk=document.querySelector("#three")

dbclk.addEventListener("dblclick",()=>{
    dbclk.style.color="yellow"
    dbclk.textContent="double clicked Done"
})
