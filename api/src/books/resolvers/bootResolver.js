const { GraphQLScalarType } = require('graphql')

const bookResolver = {
  Query: {
    books: (root, args, { dataSources }) => dataSources.BookAPI.getBooks(),
    book: (root, { id }, { dataSources }) => dataSources.BookAPI.getBookById(id),
  },
  Mutation: {
    adicionarBook: async (root, book, { dataSources }) =>
    dataSources.BookAPI.adicionarBook(book),
  }
 
}

module.exports = bookResolver

