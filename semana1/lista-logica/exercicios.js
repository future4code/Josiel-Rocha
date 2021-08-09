// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
   // implemente sua lógica aqui
   return num1 + num2
 }
 
 // EXERCÍCIO 0B
 function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')
 
   console.log(mensagem)
 }
 
 // EXERCÍCIOS PARA FAZER ------------------------------------------------------------------
 
 // EXERCÍCIO 01

 function calculaAreaRetangulo() {   
   let altura = Number(prompt("vai"))
   let largura = Number(prompt("vai2"))
   const aria = altura * largura
   
   console.log(aria)
 }
 
 // EXERCÍCIO 02

 function imprimeIdade() {
   // implemente sua lógica aqui

   let anoAtaul = Number(prompt("ano atual"))
   let anoNascimento = Number(prompt("nascimento"))
   const idade = anoAtaul - anoNascimento
   
   console.log(idade)
 }
 
 // EXERCÍCIO 03

 function calculaIMC() {
   // implemente sua lógica aqui
 }

//Exercício 4

function imprimeInformacoesUsuario() {
   // implemente sua lógica aqui
   const nome = prompt("Oi, qual é seu nome?")
   const idade = prompt("Qual sua idade?")
   const email = prompt("Qual seu Email?")
   console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

//Exercício 5

function imprimeTresCoresFavoritas() {
   // implemente sua lógica aqui   
   var cor1 = prompt("Quais são suas cores favorita?")
   var cor2 = prompt("Mais uma")
   var cor3 = prompt("Ultima cor")
   const cores = [cor1,cor2,cor3]
   console.log(cores)
}

//Exercício 6

function retornaStringEmMaiuscula() {
   // implemente sua lógica aqui
}

//Exercício 7

function calculaIngressosEspetaculo() {
   // implemente sua lógica aqui
   let custo = 3000
   let ingresso = 100
   const venda = custo / ingresso 
   console.log(venda)
}

// Exercício 8

function checaStringsMesmoTamanho() {
  // implemente sua lógica aqui
  const string1 = "casa"
  const string2 = "luva"
  if(string1 === string2){
     console.log("true")
  }else{
     console.log("false")
  }
}

// Exercício 9

function retornaPrimeiroElemento() {
   // implemente sua lógica aqui
   const carros = ["Uno, Prisma, Hb20, A20"]
   let escolhaCarro = carros[0]
   console.log(escolhaCarro)
}

// Exercício 10

function retornaUltimoElemento(array) {
   // implemente sua lógica aqui
   const carros = ["Uno", "Prisma", "Hb20", "A20"]
   let escolhaCarro2 = carros[3]
   console.log(escolhaCarro2)
}

//Exercício 11

function trocaPrimeiroEUltimo() {
   // implemente sua lógica aqui
   const frutas = ["uva", "abacate", "mamão", "melão", "abacaxi"]
   let trocaFruta = frutas.length[-1]
   console.log(trocaFruta)
}

// Exercício 12

function checaIgualdadeDesconsiderandoCase() {
   // implemente sua lógica aqui
   const string1 = "onibus"
   const string2 = "tomate"
   if(string1 === string2.toUpperCase()){
      console.log("true")
   }else{
      console.log("false")
   }
}

// Exercício 13

function checaRenovacaoRG() {
   // implemente sua lógica aqui
   let anoAtaul = Number(prompt("Informe o ano atual"))
   let anoNascimento = Number(prompt("Qual o ano do seu nacimento?"))
   let anoIdentidade = Number(prompt("Ano de emição da identidade"))
   const idade = anoAtaul - anoNascimento
   const renovacaoRG = anoAtaul - anoIdentidade 

   if(idade <=20  ){
       console.log(" Você deve ser renovada de 5 em 5 anos")
     if(renovacaoRG >=  5){
         console.log("você deve renovar sua carteira imediatamente")
     }else{
        console.log("você está em dia")
     }
   }if(idade >20 <= 50 ){
       console.log(" Você deve ser renovada de 10 em 10 anos")
      if(renovacaoRG >=  10){
          console.log("você deve renovar sua carteira imediatamente")
      }else{
         console.log("você está em dia")
      }
    }if(idade >=50  ){
        console.log(" Você deve ser renovada de 15 em 15 anos")
      if(renovacaoRG >=  15){
          console.log("você deve renovar sua carteira imediatamente")
      }else{
         console.log("você está em dia")
      }
    }else{
       console.log()
    }
   }   

// Exercício 14

function checaAnoBissexto(ano) {
   // implemente sua lógica aqui
}

// Exercício 15

function checaValidadeInscricaoLabenu(pessoa) {
   // implemente sua lógica aqui
}