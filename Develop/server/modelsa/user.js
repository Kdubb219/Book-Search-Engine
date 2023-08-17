const {gql} = require('apollo-server-express');
const typeDefs = gql `

type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]!
    bookCount: Int!
  }
  
  type Book {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }
  
  input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }
  
  type Query {
    getUser(_id: ID!): User
  }
  
  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
    saveBook(userId: ID!, book: BookInput!): User
    removeBook(userId: ID!, bookId: String!): User
  }
  
  schema {
    query: Query
    mutation: Mutation
  }
  `;
  module.exports=typeDefs;