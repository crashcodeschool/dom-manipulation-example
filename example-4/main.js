// initialize variables for HTML elements
const counter = document.querySelector('#counter')
const addOneButton = document.querySelector('#add-1')
const subtractOneButton = document.querySelector('#subtract-1')
const addFiveButton = document.querySelector('#add-5')
const subtractFiveButton = document.querySelector('#subtract-5')

// set number to 0
let total = 0

const add = (amount) => {
    total= total + amount
    counter.innerHTML = total
}

const subtract = (amount) => {
    total = total - amount
    counter.innerHTML = total
}

// click handlers for adding and subtracting
addOneButton.addEventListener('click', function () {
    add(1)
})

subtractOneButton.addEventListener('click', function(){
    subtract(1)
})

addFiveButton.addEventListener('click', function(){
    add(5)
})

subtractFiveButton.addEventListener('click', function(){
    subtract(5)
})