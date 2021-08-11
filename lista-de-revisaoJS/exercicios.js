// EXERCÍCIO 01
function inverteArray (arrey) {
  const arrayInvertido = [0, 8, 23, 16, 10, 15, 41, 12, 13,]
  for(let i = array.length - 1; i >= 0; i-- ) {
    arrayInvertido.push(array[i])
  }
  return arrayInvertido
}
console.log(inverteArray)

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let novoArray = [2, 3, 7, 4, 5, 6];
	for(let i = 0; i < array.length; i++) {
		if(array[i] % 2 === 0) {
      novoArray.push(array[i] * array[i])
    }
  }
	return novoArray
}
retornaNumerosParesElevadosADois()

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let novoArray = [8,4 ,7 ,2 ,1];
	for(let i = 0; i < array.length; i++) {
		if(array[i] % 2 === 0) {
	      novoArray.push(array[i])
	  }
  }
	return novoArray
}
retornaNumerosPares()

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = array[0]
  for (let i = 0;i < array.length;i++) {
    if (maiorNumero < array[i]) {
      maiorNumero = array[i]
    }
  }
  return maiorNumero
}
retornaMaiorNumero()

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
const array = ["cenolra", "abacate", "uva"]
  return array.length
}
retornaQuantidadeElementos()

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const respostas = [true, true, true, true, false]
  return respostas
}
retornaExpressoesBooleanas()

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const novoArray = [2, 6, 7, 8, 9];
  for(let number = 0; novoArray.length < n; number++) {
   if(number % 2 === 0) {
     novoArray.push(number)
   }
  }
  return novoArray
}
retornaNNumerosPares()

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if(a !== b && b !== c) {
    return'Escaleno'
   } else if(a === b && b === c) {
     return'Equilátero'
    } else {
      return'Isósceles'
    }
}
checaTriangulo()

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let maiorNumero
  let menorNumero
  let maiorDivisivelPorMenor

  if (num1 > num2) {
    maiorNumero = num1
    menorNumero = num2
  } else {
    maiorNumero = num2
    menorNumero = num1
  }

  maiorDivisivelPorMenor = maiorNumero % menorNumero === 0

  const diferenca = maiorNumero - menorNumero

  return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca
  }
}
comparaDoisNumeros()

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let menor = Infinity
  let maior = -Infinity
  let segundoMenor = Infinity
  let segundoMaior = -Infinity
  let novoArray = [2, 6, 7, 8, 9]

  for (let i of array) {
    if (i < menor) {
      menor = i
    }
    if (i > maior) {
      maior = i
    }
  }

  for (let i of array) {
    if (i < segundoMenor && i !== menor) {
      segundoMenor = i
    }
    if (i > segundoMaior && i !== maior) {
      segundoMaior = i
    }
  }
  novoArray.push(segundoMaior)
  novoArray.push(segundoMenor)

  return novoArray
}
segundoMaiorEMenor()

// EXERCÍCIO 11
function ordenaArray(array) {
  const len = array.length
  for (let i = 0;i < len;i++) {
    for (let j = 0;j < len;j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = tmp
      }
    }
  }
  return array
}
ordenaArray()

// EXERCÍCIO 12
function filmeFavorito() {
  const filme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }

 return filme
}
filmeFavorito()

// EXERCÍCIO 13
function imprimeChamada() {
  const filme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }

  let atoresConcat = ""
  for (let i = 0;i < filme.atores.length;i++) {
    if (i === filme.atores.length - 1) {
      atoresConcat += filme.atores[i]
    } else {
      atoresConcat += filme.atores[i] + ", "
    }
  }

  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, 
  dirigido por ${filme.diretor} e estrelado por ${atoresConcat}.`
}
imprimeChamada()

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }

  return retangulo
}
criaRetangulo()

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const pessoa = {
    nome: "Astrodev",
    idade: 25,
    email: "astrodev@labenu.com.br",
    endereco: "Rua do Futuro, 4"
  }
  return {
    ...pessoa,
    nome: 'ANÔNIMO'
  }
}
anonimizaPessoa()

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const novoArray = arrayDePessoas.filter((pessoa) => {
    return pessoa.idade >= 18
  })
  return novoArray
}
maioresDe18()

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
    const novoArray = arrayDePessoas.filter((pessoa) => {
      return pessoa.idade < 18
    })
    return novoArray
}
maioresDe18()

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
    const novoArray = array.map((num) => {
     return num * 2
     })
    return novoArray
}
multiplicaArrayPor2()

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const novoArray = array.map((num) => {
    return(num * 2).toString()
    })
   return novoArray
}
multiplicaArrayPor2S()

// EXERCÍCIO 17C
function verificaParidade(array) {
  const novoArray = array.map((num) => {
    if (num % 2 === 0) {
      return `${num} é par`
    } else {
      return `${num} é ímpar`
    }
  })

  return novoArray
}
verificaParidade()

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
