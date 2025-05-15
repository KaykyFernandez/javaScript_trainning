const num = [6, 7, 8, 9 ]
//localizando itens de forma primitiva
console.log(num.includes(8))//posição se é verdadeiro ou falso
console.log(num.indexOf(8))//posição do index


const movie = [       //localizando array de referencia
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: 'Back to the future'},
    {id: 3, movieName: 'The Matrix'}
]

console.log(movie.includes({id: 2, movieName: 'Back to the future'}))

console.log(movie.find(function(movie){        //função procurar o item
    return movie.movieName == 'The Matrix'
}))

console.log(movie.find(movie => movie.movieName == 'The Matrix'))//arrow function
                           //^ function e return incluso
