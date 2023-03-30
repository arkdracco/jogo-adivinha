//Segundo código Grace

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const numberRange = 10

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

function buttonTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')
  
  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    
    screen2.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativas.`
  }

  const validNumber = Number(inputNumber.value) >= 0 && Number(inputNumber.value) <= 10

  if(!validNumber) {
    alert("Favor informar números entre 01 e 10")    
  }

  inputNumber.value = ""
  xAttempts++ 
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
 
function handleResetClick() {
  toggleScreen()
  randomNumber = Math.round(Math.random() * 10)
  xAttempts = 1
}

btnTry.addEventListener('click', buttonTryClick)

btnReset.addEventListener('click', function() {
  toggleScreen()  
  randomNumber = Math.round(Math.random() * 10)
  xAttempts = 1
})


/*
Refatorar o código
-- Fazer a função do Enter
-- Criar evento Enter
-- Validar o Enter, se não tiver o número não há execução;
*/