const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const ampm = document.getElementById("ampm")

const days = [
"sun","mon","tue","wed","thu","fri","sat"
]

function updateClock(){

const now = new Date()

let h = now.getHours()
let m = now.getMinutes()

let period = "AM"

if(h >= 12){
period = "PM"
}

if(h > 12){
h = h - 12
}

if(h === 0){
h = 12
}

if(m < 10){
m = "0" + m
}
if(h < 10){
    h = "0" + h
}

hours.textContent = h
minutes.textContent = m
ampm.textContent = period


const today = now.getDay()

days.forEach(day=>{
document.getElementById(day).classList.remove("active-day")
})

document.getElementById(days[today]).classList.add("active-day")

}

setInterval(updateClock,1000)

updateClock()


const themeBtn = document.getElementById("themeBtn")

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("light")

})