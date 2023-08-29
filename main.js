/*1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
*/
alert("Hello world!")


//2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const numberOne = 50
const numberTwo = 4

alert(numberOne + numberTwo)

//3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

const number = 10

if(typeof number == 'number') {
    alert("È um número ")
}
else {
    alert("Não é um numero")
}


//4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

const isString = 'Isso é uma String'

if(typeof isString == 'string') {
    alert("È uma String")
} else {
    alert("Não é uma String")
}

//5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

const isBoolean = true

if(typeof isBoolean == 'boolean') {
    alert("Isso é uma boolean")
} else {
    alert("Não é uma boolean")
}

//6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

const sub = numberOne - numberTwo

alert(sub)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

const mult = numberOne * numberTwo

alert(mult)
//8.  Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas

const restDiv = numberOne % numberTwo

alert (restDiv)


const isEvenNumber = 8 

if (isEvenNumber % 2 == 0) {
    alert('È um número par')
} else {
    alert('Não é um numero ímpar')
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".


const isOddNumber = 15;

if (isOddNumber % 2 != 0) {
  alert("É um número ímpar");
} else {
  alert("Não é um número ímpar");
}