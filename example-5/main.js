const emailField = document.querySelector('#email')
const formSubmitButton = document.querySelector('#submit')

alertSubscriber = () => {
    document.write(`we've successfully subscribed ${emailField.value} to our mailing list`)
    console.log(emailField.value)
}


formSubmitButton.addEventListener('click', alertSubscriber)