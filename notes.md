Ao iniciar o projeto crio uma pasta com o nome do projeto e abro no VSCode. Pode ser pelo browser, dentro do VSCode, de qq forma que seja mais tranquila para criar a pasta.
Crio os arquivos index.html, style.css e main.js

Dentro do <head> inicio o index utilizando o Emmet !, altero a linha 2 de "en" para "pt-br"
Excluo a linha 5 referente ao Edge
Com o projeto aberto no Figma vejo as especificações e pesquiso as fontes no Google Fonts, copio os links para html e tbm para css (colo em algum lugar). Os links preconnect coloco na linha 4 (abaixo da tag head), pulo 1 linha, mantenho as metas, altero o título, pulo 1 linha, insiro o link:css e o href e fecho o </head>.

Inicio o <body> com <main> e crio as div's conforme o lay out
Fecho o </main> dentro do </body>.
<body>
  <main>
    <h1>...</h1>
  </main>

Inicio o style.css resetando * e criando :root com font-size: 62.5%, variáveis e ffamilies e alterando o hexadecimal em HSL.

Se o projeto estiver no Figma, copiar e colar as propriedades de CSS no style.css, verificar e excluir quais as informações são relevantes para estilização.

Alterar o que estiver em px para rem.

Estilizar o .css conforme a ordem do HTML.

Indentar corretamente o HTML e o CSS

Utilizar <form></form> para criar input no button

inserir o <script src="./main.js"></script> antes de fechar o </body>

Em JS, inicialmente criar as devidas const com os nomes das div's, classes, id's, atribuindo às elas a DOM desejada.
Criar as function( ) { } para executar ação no projeto e seus respectivos eventos
(Lembrar de criar nome para function antes dos ())

Refatorar o código para torná-lo mais semântico

<!-- JavaScript -->
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Callback
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber) {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")

    document.querySelector(".screen2 h2").innerText = `acertou em ${xAttempts} tentativas`
  }
  
  inputNumber.value = ""
  xAttempts++
}

// Eventos
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function() {
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
  xAttempts = 1
})

<!-- main.js refatorado -->

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// funções
function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativa(s)!`
  }
  
  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  randomNumber = Math.round(Math.random() * 10)
  xAttempts = 1
}

//Eventos
btnTry.addEventListener('click', handleTryClick)

btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }  
})

<!-- Desafios -->
Refatorar o código utilizando a função toggle
Fazer a função do Enter (refatoração);

Fazer limite para clicar entre 0 e 10
- não pode clicar em número negativos
- não pode clicar em número > 10
if < 0 e if > 10;

Validar o Enter, se não tiver o número não há execução;


<!-- 
// Mozão

const form = document.querySelector('form')
let randomNumber = Math.round(Math.random() * 10)

/*
  Alguns tipos de eventos:

    1. 'click'
    2. 'submit'
    3. 'keyup'
    4. 'input'
*/

form.addEventListener('submit', event => {
  event.preventDefault()
  const inputNumber = event.target.inputNumber

  const inputNumberValue = Number(event.target.inputNumber.value)
  
  const isAValidNumberValue = inputNumberValue >= 0 && inputNumberValue <= 10

  if (!isAValidNumberValue) {
    console.log('Por favor informe um número entre 0 e 10')
    return
  }
  if (inputNumberValue === randomNumber) {
    console.log('Parabéns, você acertou. O número correto é' + randomNumber)
    randomNumber = Math.round(Math.random() * 10)
    inputNumber.value = ''
    return
  }

  console.log('Infelizmente você errou, Tente novamente!')
  inputNumber.value = ''
})
 -->

 /*
let randomNumber2 = Math.random()

console.log(randomNumber2)
VM393:1 0.17245548337053251

console.log(randomNumber2 * 10)
VM502:1 1.7245548337053251

let result = randomNumber2 * 10

console.log(Math.round(result))
VM861:1 2

*/

<!-- 

Primeiro código - Grace

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const numberRange = 10

let randomNumber = Math.round(Math.random() * numberRange)
let xAttempts = 1

function buttonTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if(Number(inputNumber.value) == randomNumber) {
    screen1.classList.add('hide')
    screen2.classList.remove('hide')

    document.querySelector('.screen2 h2').innerText = `Acertou em ${xAttempts} tentativas.`
  }
  inputNumber.value = ''
  xAttempts = xAttempts + 1
}

btnTry.addEventListener('click', buttonTryClick)

btnReset.addEventListener('click', function() {
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
  
  xAttempts = 1
  randomNumber = Math.round(Math.random() * numberRange)
})


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
-- Criar função toggle (OK)
-- Fazer limite para clicar entre 0 e 10 (OK)
--- não pode clicar em número negativos  (OK)
--- não pode clicar em número > 10       (OK)
    if < 0 e if > 10;
*/