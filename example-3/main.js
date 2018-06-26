// initialize variables for HTML elements
const counter = document.querySelector('#counter')
const addButton = document.querySelector('#add')
const subtractButton = document.querySelector('#subtract')

// set number to 0
let total = 0


const addOne = () => {
    total++
    counter.innerHTML = total
}

const subtractOne = () => {
    total--
    counter.innerHTML = total
}

addButton.addEventListener('click', addOne)
subtractButton.addEventListener('click', subtractOne)
