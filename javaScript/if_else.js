// testa sua idade para festa

function apresentacao(nome, idade) {
     console.log('olá '+nome+' tudo bem?')
     console.log('você tem '+idade+' anos certo?')

     if (idade >= 18){
        return console.log("você pode entrar!, idade permitida");
    } else if ( idade < 18){
        return console.log("você não pode entrar!, deve ter 18 anos ou mais!!")
    }
}

apresentacao('kayky', 19)
