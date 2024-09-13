var agora = new Date()
var hora = agora.getHours()
if(hora < 6){
    console.log(`Agora é ${hora} Da Madrugada`)
    console.log('Está de Madrugada')
} else if(hora >= 6 && hora < 12){
    console.log(`Agora é ${hora} Da manha`)
    console.log('Bom Dia')
} else if (hora >= 12 && hora < 18)  {
    console.log(`agora é ${hora} Da tarde`)
    console.log('Boa Tarde')
} else {
    console.log(`agora é ${hora} Da Noite`)
    console.log('Boa Noite')
} 