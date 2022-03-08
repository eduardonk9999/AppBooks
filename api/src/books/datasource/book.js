const { RESTDataSource } = require('apollo-datasource-rest')

class BookAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'http://localhost:3000'
  }

  async getBooks () {
    const books = await this.get('/books')
      return books.map(async book => ({
        id: book.id,
        nome: book.nome,
        autor: book.autor,
        role: await this.get(`/roles/${book.role}`)
      }))
  }

  async getBookById(id) {
    const book = await this.get(`/books/${id}`)
    book.role = await this.get(`/roles/${book.role}`)

    return book
  }

  async adicionarBook(book) {
    const books = await this.get('/books')
    //book.id = books.lenght + 1
    const role = 1
    await this.post('books', {...book, role: role})
    return({
      ...book,
      role: role[0]
    })
  }
}


module.exports = BookAPI