const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('password-two')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()

    // Substitui a expressão que você usava no if para ser essa função utilitária `isEmpty`. Dessa forma, você escreve menos e é até mais legível :)
    // Além disso, fica como exercício você tentar extrait essas verificações do username para uma função chamada `validateUsername`. Utilize os exemplos
    // abaixo como guias. No final, a intenção é que essa função `checkInputs` fique bem pequena e bem legível. O que importa ao leitor, à priori, é
    // saber quais campos você quer validar. Deixe os detalhes de como cada campo é validado em suas próprias funções!
    
    if (isEmpty(usernameValue)) {
        // mostrar erro
        // add classe
        setErrorFor(username, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(username)
    }

    // Tirei a validação aqui e coloquei em uma função que está definida abaixo. Dessa forma, o código fica menor aqui e mais expressivo, pois
    // sabemos que queremos validar o email. Quando colocamos muitos detalhes de código em uma só função, pode ficar confuso de entender.
    this.validateEmail(emailValue)
    this.validatePassword(passwordValue) 
  
    
    // Extrair essa verificação para uma função chamada `validatePasswordConfirmation`
    if(passwordtwoValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(passwordtwo, 'Preencha esse campo')

    } else if (passwordValue !== passwordtwoValue) { 
        setErrorFor(passwordtwo, 'Senhas não tão iguais')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(passwordtwo)
    }

}

function validateEmail(emailValue) {
  if (isEmpty(emailValue)) {
    // mostrar erro
    // add classe
    setErrorFor(email, 'Preencha esse campo')
  } else if (!isEmail(emailValue)) {
      setErrorFor(email, 'Email inválido')
  } else {
      // adicionar a classe de sucesso
      setSuccessFor(email)
  }
}

function validatePassword(passwordValue) {
  if (isEmpty(passwordValue)) {
        // mostrar erro
        // add classe
        setErrorFor(password, 'Preencha esse campo')

    } else if (passwordValue.length < 8) { 
        setErrorFor(password, 'Senha deve ter mais que 8 caracteres')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(password)
    }
}

function isEmpty(textValue) { 
    return textValue === ''
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}
