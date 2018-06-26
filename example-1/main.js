// define variables for our HTML tags
const myGreeting = document.querySelector('.greeting')
const blueButton = document.querySelector('#blue-btn')
const redButton = document.querySelector('#red-btn')

// function to turn greeting blue
const turnBlue = () => {
    myGreeting.setAttribute('class', 'blue')
}

// function to turn greeting red
const turnRed = () => {
    myGreeting.setAttribute('class', 'red')
}

// listen for click events to happen, and execute above functions
blueButton.addEventListener('click', turnBlue)
redButton.addEventListener('click', turnRed)
