//Exercicios 

//Ex1 

//a) Ao addcionar um numero a uma string ocorrerar um erro
//const minhaString: string = 12

//const meuNumero: number = 25

//b) Para aceitar uma string é necessario declarar any que assume qualquer vakor
/* c e d
type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum COR_ARCO_IRIS{
    AZUL = "azul" ,
    VERDE = "verde" , 
    ROXO = "roxo" , 
    LILAZ = "lilaz" ,
}

const pessoa1: pessoa = {
    nome: "João",
    idade: 24,
    corFavorita: COR_ARCO_IRIS.AZUL
}

const pessoa2: pessoa = {
    nome: "Izabelle" , 
    idade: 33 ,
    corFavorita: COR_ARCO_IRIS.VERDE
}

const pessoa3: pessoa = {
    nome: "Hugo" ,
    idade: 22 ,
    corFavorita: COR_ARCO_IRIS.ROXO
}

const pessoa4: pessoa = {
    nome: "Maria", 
    idade: 19,
    corFavorita: COR_ARCO_IRIS.LILAZ
}
*/

//Ex2

function obterEstatisticas (numeros: number){

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}3