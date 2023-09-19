let inputNome     = document.getElementById("name")
let inputEmail    = document.getElementById("email")
let inputPhone    = document.getElementById("phone")
let btnEnviar     = document.querySelector("#btnEnviar")
let divSucess     = document.querySelector("#sucessRegister")
let formUser      = document.querySelector("#formUser")

const errorName  = document.createElement('p')
const errorEmail = document.createElement('p')
const errorPhone = document.createElement('p')

errorName.classList.add('error-message')
errorEmail.classList.add('error-message')
errorPhone.classList.add('error-message')

const displayError = (field, message) => {
    field.parentNode.appendChild(message)
}

const clearError = (field, message) => {
    if (field.parentNode.contains(message)) {
        field.parentNode.removeChild(message)
    }
}


btnEnviar.addEventListener("click", async (event) => {
    event.preventDefault()
    
    const data = {
        name: inputNome.value,
        email: inputEmail.value,
        phone: inputPhone.value
    }

    clearError(inputNome, errorName)
    clearError(inputEmail, errorEmail)
    clearError(inputPhone, errorPhone)

    if (data.name === '') {
        errorName.textContent = 'Por favor, preencha o nome.'
        displayError(inputNome, errorName)
    }
    if (data.email === '') {
        errorEmail.textContent = 'Por favor, preencha o email.'
        displayError(inputEmail, errorEmail)
    } else if (!isValidEmail(data.email)) {
        errorEmail.textContent = 'O email não é válido.'
        displayError(inputEmail, errorEmail)
    }
    if (data.phone === '') {
        errorPhone.textContent = 'Por favor, preencha o telefone.'
        displayError(inputPhone, errorPhone)
    } else if (!isValidPhone(data.phone)) {
        errorPhone.textContent = 'O número de telefone não é válido.'
        displayError(inputPhone, errorPhone)
    }

    if (data.email !== '' && data.name !== '' && data.phone !== '' && isValidEmail(data.email) && isValidPhone(data.phone)) {
        console.log(data)
        formUser.classList.add("displayNone")
        divSucess.classList.remove("displayNone")
    }
    
})

const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailRegex.test(email)
}

const isValidPhone = (phone) => {
    const phoneRegex = /^\d{10,}$/
    return phoneRegex.test(phone)
}