function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

   if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    alert('Por favor Coloque um números em todos para começar')
   } else {
        res.innerHTML = `Contando <br>`
        var ini = Number(inicio.value)
        var fi = Number(fim.value)
        var pas = Number(passo.value)
        if (pas <= 0){
            alert('passo invalido considerando como 1')
            pas = 1
        }
        if(ini < fi){
        for(var num = ini; num <= fi; num += pas){
            res.innerHTML += (` ${num} --- `)
        }
    
       
        } else {
            for(var num = ini; num >= fi; num -= pas){
            res.innerHTML += (` ${num} `)
        }
        
        }
   res.innerHTML += (' Fim ')
   }
}