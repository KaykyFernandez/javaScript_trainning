
function createBook(title, autor, pages) {

  const book = {
    bookTitle: title,
    bookAutor: autor,
    bookPages: pages,
    printBook:function() {
       console.log('printing...')
    }  
  }
  return book
}


const book1 = createBook ('tomic', 'kayky', 89)
book1.color = 'white'
console.log(book1)
const book2 = createBook ('tornelas', 'kayky', 829)
console.log(book2)


