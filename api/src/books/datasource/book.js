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
}


module.exports = BookAPI