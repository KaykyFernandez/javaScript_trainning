//estruturas de repetição
//For loop
for (i = 0; i <= 10; i++ ){
     console.log('numero ',i)
     
}

for (e = 9; e >=0; e-- ){
  console.log('numero ',e)
}

//while Loop
i = 1 

while (i <= 10){
  if (i === 8) break
  console.log('Numero ', i)
  i++
} 

//Do while loop
i = 1
do {
  console.log('numero ', i)
  i++
} while (i <= 10)

For in loop
const myCar = {
  model: 'BMW',
  year: 2023,
  km: 68000
}

for (let i in myCar)
  console.log(i, myCar[i])

//For of loop

const friends = ['William', 'Eloah', 'Kayky', 'Pedro']

for (let i of friends)
  console.log(i)