// initialize #my-button as JavaScript variable
const myButton = document.querySelector('#my-button')

// write function called sayHello for printing hello world
const sayHello = () => {
    var msg = document.createElement("H1");
    msg.innerHTML = 'hello world'
    document.body.appendChild(msg)
}

// create click handler that calls sayHello on click
myButton.addEventListener('click', sayHello)