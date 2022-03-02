const { GraphQLScalarType } = require('graphql')

const bookResolver = {
  Query: {
    books: (root, args, { dataSources }) => dataSources.BookAPI.getBooks(),
  },
 
}

module.exports = bookResolver

