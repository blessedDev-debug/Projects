const add = document.querySelector('.add');
const minus = document.querySelector('.minus');
const auto = document.querySelector('.auto');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const countNum = document.querySelector('#count');
stop.disabled = true

let num = 0;
let timer = null;


function updateDisplay(){
    countNum.textContent = num;
};

function countIncrement(){
    num++;
    updateDisplay();
};


add.addEventListener('click', ()=>{
    num++;
    updateDisplay();
})
minus.addEventListener('click', ()=>{
    num--;
    if(num < 0){
        num = 0;
    };
    updateDisplay();
});


auto.addEventListener('click', ()=>{
    if(timer !== null) return;
    timer = setInterval(countIncrement, 1000);
    stop.disabled = false
});

stop.addEventListener('click', ()=>{
    clearInterval(timer);
    timer = null;
    stop.disabled = true
});

reset.addEventListener('click', ()=>{
    clearInterval(timer);
    timer = null

    num = 0

    updateDisplay();
    stop.disabled = true
});

document.addEventListener('keydown', (e)=>{
    if( e.key === "+"){
        num++
        updateDisplay()
    }
    if(e.key  === "-"){
        num--
        updateDisplay()
        if(num < 0){
            num = 0
        }
        updateDisplay()
    }
})




























// let add = document.querySelector('.add')
// let minus = document.querySelector('.minus')
// let auto = document.querySelector('.auto')
// let stop = document.querySelector('.stop')
// let reset = document.querySelector('.reset')
// let countNum = document.querySelector('#count')
// let num = 0
// let logic = 0
// let timer;


// function count_increment(){
//     num++
//     countNum.innerHTML = num
//      return;
// }
// add.addEventListener('click', ()=>{
//     num++
//     countNum.innerHTML =+ num
//     return
// })

// minus.addEventListener('click', ()=>{
//     num--
//     if(num < 0 ){
//         num++
//     }
//     countNum.innerHTML =+ num
//     return

// })
// reset.addEventListener('click', ()=>{
//     clearInterval(timer)
//     num = 0
//     countNum.innerHTML =+ num
//     return

// })
// auto.addEventListener('click', ()=>{
//     logic++
//     if(logic >= 1){
//     stop.style.color = 'green'
//     stop.style.background = 'white'
//     stop.style.boxShadow = '0px 3px 5px rgb(186,255,97)'

//     if(logic >=2){
//         logic--
//     }
//     count_increment()
//     timer =  setInterval(count_increment, 1000)
//     return

// }
// })
// stop.addEventListener('click', ()=>{
//     if(logic >= 1){
//       clearInterval(timer)
//     }
//     logic--
//     if(logic == 0){
//         stop.style.color = '#444'
//         stop.style.background = '#777'
//         stop.style.boxShadow = '0px 3px 5px #777' 
//    }
// })
// // let dte = document.querySelector('.date')
// // let time = new Date 
// // dte.innerHTML = time
// // this code is to show conditions, increment, decrement, setIntervals, clearIntervals, EventListener