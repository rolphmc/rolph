function chamaNome(){
    var nome = prompt('qual o seu nome?')

    alert(nome)
} 

function chamaCalculadora(gtl, what){
    var n1 = prompt('diga um nº')
    var n2 = prompt('Digite outro nº para fazer uma soma')
    var r1 = n1 + n2
    
    if (gtl){
        alert('a soma de n1 + n2 é igual a ' + r1)
    }else{
        var n1 = Number.parseInt(n1)
        var n2 = Number.parseInt(n2)
        var r1 = n1 + n2
        if(what){
            alert(`a soma de ${n1} + ${n2} é igual a ${r1}`)
        }else{
            alert('a soma de n1 + n2 é igual a ' + r1)
        }
        
    }
}

function chamaContador(){
    var nome = prompt('qual seu nome?')
    alert(`Seu nome tem ${nome.length} letras`)
    alert(`Seu nome em maiúscula é ${nome.toUpperCase()} letras`)
    alert(`Seu nome em maiúscula é ${nome.toLowerCase()} letras`)
}

function convertNumber(){
    var number = Number.parseFloat(prompt('fale um número racional'))
    var dig = Number.parseInt(prompt('fale quantas casas decimais'))
    var dotPref = prompt('qual pontuação deseja? (. , ;')

    alert(`fixado ${dig} casa decimais resultando em: ${number.toFixed(dig)}`)
    alert(`trocando o saparador: ${number.toFixed(dig).replace('.',dotPref)}`)
    alert(`Transformando em Real = ${number.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`)
    alert(`Transformando em Dolar ${number.toLocaleString('pt-br', {style: 'currency', currency: 'USD'})}`)
    alert(`Transformando em Euro ${number.toLocaleString('pt-br', {style: 'currency', currency: 'EUR'})}`)

}

function sun(x,y){
    alert(x + y) 
}

let diff = function(x,y) {
    alert(x-y)
}

class X {
    get Y (){
        return 42
    }
}

function returnX () {
    const x = new X()

    alert(x.Y)
}