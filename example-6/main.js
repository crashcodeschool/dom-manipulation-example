// create variable for each light
const redLight = document.querySelector('.red')
const yellowLight = document.querySelector('.yellow')
const greenLight = document.querySelector('.green')
let x = 0;

for (var i = 0; i < 1000; i++) {
  (function (i) {
    setTimeout(function () {
        if (x === 0) {
            console.log('making the light red')
            redLight.setAttribute('id', 'red')
            greenLight.removeAttribute('id', 'green')
            x++
        } else if (x === 1) {
            console.log('making the light yellow')
            redLight.removeAttribute('id', 'red')
            yellowLight.setAttribute('id', 'yellow')
            x++
        } else if (x === 2) {
            console.log('making the light green')
            yellowLight.removeAttribute('id', 'yellow')
            greenLight.setAttribute('id', 'green')
            x=0
        } else {
            console.log('err')
        }
    }, 3000*i);
  })(i);
};

// call function