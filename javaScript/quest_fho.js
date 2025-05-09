//radar
function myCar(car, speed, name){
   console.log('olá '+name+' tudo bem?')
   console.log('esse '+car+' é seu certo?')

   if(speed <= 40){
    return console.log(speed+'km, você está abaixo da velociadade minima que é 60km!');
 } else if( speed <= 80){
    return console.log(speed+'km, sua velociadade está ok!');
 } else if( speed <= 110){
    return console.log('sua velocidade está em '+speed+'km, cuidado para ultrapassar a velocidade maxima da via!');
 } else( speed < 110 ) 
    return console.log('você levou multa, sua velocidade esta em '+speed+ 'km, velocidade muito alta!');
 
}

myCar('agile', 90, 'Pedro')