let sampleArrw = document.querySelector('.smple-arrw')
let matchArrw = document.querySelector('.img')
let submitBtn = document.querySelector('#submit-btn')
let angDeg = document.querySelector('.angle-degree')
let leftArrw = document.querySelector('.left')
let rightArrw = document.querySelector('.right')
let angle = 7



let randomPoint = Math.floor(Math.random()*8)
let randomPosition = Math.floor(Math.random()*8)
                                                        
let positionArr = ['0deg', '45deg', '90deg', '135deg','180deg', '225deg', '270deg', '315deg']
sampleArrw.style.transform = 'rotate('+positionArr[randomPoint]+')'
matchArrw.style.transform = 'rotate('+positionArr[randomPosition]+')'
