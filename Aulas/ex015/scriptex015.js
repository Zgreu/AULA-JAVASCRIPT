function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] verifique se as informações estão certas')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = "Masculino"
            if (idade >= 0 && idade < 10 ) {
                img.setAttribute('src', '../ex014/imagens/tarde.png')
                
            }
        } else if (fsex[1].checked){
            genero = 'Feminino'
        } else if (fsex[2].checked){
            genero = 'Outro'
        }
            res.innerHTML = `o seu genero é: ${genero}` 
            res.innerHTML += `<br> e sua idade é: ${idade}`
            res.appendChild(img)
              
        
    }
}