const { ApolloServer} = require('apollo-server')
const userSchema = require('./books/schema/book.graphql')
const userResolvers = require('./books/resolvers/bootResolver.js')
const BookAPI = require('./books/datasource/book')

const typeDefs = [userSchema]
const resolvers = [userResolvers]


const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      BookAPI: new BookAPI()
    }
  }
})



server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`)
})