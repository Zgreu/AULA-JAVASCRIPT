function gerar(){
    let numero = document.getElementById('numero')
    let res = document.getElementById('res')

    if(numero.value.length == 0) {
       alert('Digite um numero')
    } else {
        let num = Number(numero.value)
        res.innerHTML = ''

        for(n = 1; n<= 10; n++){
            let item = document.createElement('option')
            item.text = `${num} x ${n} = ${num*n}`
            item.value = `res${n}`
            res.appendChild(item)
        }
    }

    
}