

function adicionar(){
    let num = document.getElementById('numeros')
    let botao = document.querySelector('#botao')
    let select = document.querySelector('#select')
    let item = document.createElement('option')

    if(num.value.length == 0) {
        alert('Digite um numero')
    } else {

    num = Number(num.value)
        select.innerHTML = ''
    item.text = `voce adicionou o numero ${num}`
    select.appendChild = (item)
    }
    }
