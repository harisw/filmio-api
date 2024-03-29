const { gql } = require('apollo-server-express');

module.exports = gql`
    scalar DateTime

    type Movie {
        id: ID!
        title: String!
        description: String
        filmtv_id: Int
        avg_vote: Float
        duration: Int
        directors: String
        actors: String
        years: Int
        genre: String
        country: String
        total_votes: Int
        createdAt: DateTime
        updatedAt: DateTime
        favoriteCount: Int!
        favoritedBy: [User!]
    }
    type User {
        id: ID!
        username: String!
        email: String!
        avatar: String
        movies: [Movie!]!
        favorites: [Movie!]!
    }
    type Country {
        id: ID!
        name: String!
        slug: String!
    }
    type Genre {
        id: ID!
        name: String!
        slug: String!
    }
    type MovieFeed {
        movies: [Movie]!
        cursor: String!
        hasNextPage: Boolean!
    }
    type Query {
        movies: [Movie]
        movie(id: ID!): Movie!
        user(username: String!): User
        users: [User!]!
        countries: [Country]
        genres: [Genre]
        me: User!
        movieFeed(order_by: String, order: String, cursor: String): MovieFeed
        moviesByCountry(country: String!, cursor: String): MovieFeed
    }
    type Mutation {
        signUp(username: String!, email: String!, password: String!): String!
        signIn(username: String, email: String, password: String!): String!
        toggleFavorite(id: ID!): Movie!
    }
`;