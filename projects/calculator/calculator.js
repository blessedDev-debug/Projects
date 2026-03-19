const display = document.getElementById("display")
const buttons = document.querySelectorAll(".buttons button")
const powerBtn = document.getElementById("powerBtn")

let powerOn = false



// POWER SWITCH

powerBtn.addEventListener("change", () => {

if(powerBtn.checked){

powerOn = true
display.disabled = false

}else{

powerOn = false
display.disabled = true
display.value = ""

}

})



// BUTTONS FUNCTION

buttons.forEach(button => {

button.addEventListener("click", () => {

if(!powerOn) return


const value = button.textContent


// CLEAR

if(value === "C"){

display.value = ""
return

}


// EQUAL

if(value === "="){

display.value = eval(display.value)
return

}


// NORMAL BUTTONS

display.value += value

})

})