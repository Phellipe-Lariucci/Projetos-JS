let valores = []
let num = document.querySelector('input#txtnum')
let res = document.querySelector('div#res')
let list = document.querySelector('select#list')
let soma = 0
let media = 0
let maior = 0
let menor = 0


function valido(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

function inLista(n, v){
    if(v.indexOf(Number(n)) != -1) {
        return true
    } else{
        return false
    }
}
function adicionar(){
    if(valido(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
    }else{
        window.alert('Erro, Valor invalido ou ja adicionado na lista')
    }
    res.innerHTML = ''
    num.value = ''
    num.focus()
}

function fSoma(){
    soma = 0
    for(let pos in valores){
        soma += valores[pos]
    }
}

function fMaior(){
    valores.sort(function(a,b){
        return a-b
    })
    let final = Number(valores.length -1)
    maior = Number(valores[final])
    menor = Number(valores[0])
}


function exibir(){
    if(valores.length == 0){
        window.alert('Adicione algum valor antes de finalizar')
    }else{
        fSoma()
    fMedia()
    fMaior()
    res.innerHTML = `<p>Ao todo temos ${Number(valores.length)} valores cadastrados</p>`
    res.innerHTML += `<p> O maior numero adicionado foi ${maior}</p>`
    res.innerHTML += `<p> O menor numero adicionado foi ${menor}</p>`
    res.innerHTML += `<p> Somando todos os valores, temos ${soma}</p>`
    res.innerHTML += `<p> A media dos valores adicionados é ${media}</p>`
    }
}

function fMedia(){
    let total = 0
    media = 0
    for(let pos in valores){
        total += valores[pos]
    }
    media = total / valores.length
}

