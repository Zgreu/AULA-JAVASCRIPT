function carregar(){

    var msg = document.getElementById('msg')
    var foto = document.getElementById('foto')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    

    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = "imagens/manha.png"
        document.body.style.backgroundColor = '#e2cd9f'

    } else if(hora >= 12 && hora < 18){
        img.src = "imagens/tarde.png"
        document.body.style.backgroundColor = '#95C8D9'

    } else{
        img.src = "imagens/noite.png"
        document.body.style.backgroundColor = '#9F80B9'
    }

}