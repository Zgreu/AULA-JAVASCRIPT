let num = document.getElementById('numeros')
let select = document.querySelector('#select')
let res = document.querySelector('#res')
let valores = [ ]

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
} else {
        return false
}
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        select.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('valor invalido ou já adicionado')
    }
    num.value = ''
    num.focus()
    }

function analisar(){
    if(valores.length == 0){
        alert('não tem nenhum valor para analizar')
    } else {
    valores.sort()
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores){
        soma += valores[pos]

        if (valores[pos] > maior)
            maior = valores[pos] 
        if (valores[pos] < menor)
            menor = valores[pos]

    }
    media = soma / tot
    res.innerHTML = ""
    res.innerHTML += `ao Todo foram <strong>${tot}</strong> Cadastrados <br>`
    res.innerHTML += `O Menor valor é ${menor} <br>`
    res.innerHTML += `O Maior valoes é ${maior} <br>`
    res.innerHTML += `Somando os valores temos ${soma} <br>`
    res.innerHTML += `A Media é ${media}`
    }
}